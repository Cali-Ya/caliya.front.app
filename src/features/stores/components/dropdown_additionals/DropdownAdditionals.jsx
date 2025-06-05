//css
import './dropdown_additionals.css';
//icons
import CaretIconRigth from '../../../../components/caret_icons/caret_icon_rigth/CaretIconRight';
//components
import Checkbox from '../checkbox/Checkbox';
//custom hooks
import useToggle from '../../../../hooks/useToggle';
//react
import { useState, useImperativeHandle, forwardRef } from 'react';

const DropDownAdditionals = forwardRef(
  ({ list = ['item_list'], title = 'Title', onChangeAdditionals }, ref) => {
    const [iconRotate, setIconRotate] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

    const [state, handleToggle] = useToggle(true);

    // Permite limpiar los checks desde el padre
    useImperativeHandle(ref, () => ({
      clearChecks: () => setCheckedItems([]),
      getSelectedAdditionals: () => checkedItems.map((idx) => list[idx]),
    }));

    const handleCheck = (idx) => {
      setCheckedItems((prev) => {
        const newChecked = prev.includes(idx)
          ? prev.filter((i) => i !== idx)
          : [...prev, idx];
        if (onChangeAdditionals) {
          onChangeAdditionals(newChecked.map((i) => list[i]));
        }
        return newChecked;
      });
    };

    const handleIconRotate = () => {
      setIconRotate(!iconRotate);
      handleToggle();
    };

    return (
      <div className="dropdown_select_additionals">
        {/* title */}
        <article
          className="container_title_dropdown_select_addtionals"
          onClick={handleIconRotate}
        >
          <div className="content_title_list_dropdown_select_additionals">
            <h4 className="title_list_dropdown_select_additionals">{title}</h4>
          </div>
          <CaretIconRigth
            preferColor={false}
            type="dropdown"
            isCaretRight={!iconRotate}
          />
        </article>

        {/* list */}
        {state && (
          <ul className="list_dropdown_select_additionals">
            {list.map((item, idx) => (
              <li
                className="item_dropdown_select_additionals"
                key={item.id}
                onClick={() => handleCheck(idx)}
              >
                {/* information */}
                <div className="info_dropdown_select_additionals">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="info_dropdown_select_additionals__image"
                  />
                  <span className="info_dropdown_select_additionals__name">
                    {item.name}
                  </span>
                </div>

                {/* add addtional */}
                <span className="add_addtional_dropdown_select_additionals">
                  <span className="add_addtional_dropdown_select_additionals__price">
                    ${item.price}
                  </span>
                  <Checkbox checked={checkedItems.includes(idx)} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default DropDownAdditionals;
