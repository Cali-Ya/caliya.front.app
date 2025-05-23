//css
import './dropdown_select_additionals.css';

import CaretIconRigth from '../../../../components/caret_icons/caret_icon_rigth/CaretIconRight';
import useDropDowns from '../../../../hooks/useDropDowns';
import { useState, useImperativeHandle, forwardRef } from 'react';
import Checkbox from '../checkbox/Checkbox';

const DropDownSelectAdditionals = forwardRef(
  ({ list = ['item_list'], title = 'Title', onChangeAdditionals }, ref) => {
    const initialDropDown = false;
    const { isDropDown, handleDropDown } = useDropDowns({
      initialValue: initialDropDown,
    });

    const [iconRotate, setIconRotate] = useState(false);
    const [checkedItems, setCheckedItems] = useState([]);

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
      handleDropDown(!isDropDown);
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
            isCaretRight={iconRotate}
          />
        </article>

        {/* list */}
        {isDropDown && (
          <ul className="list_dropdown_select_additionals">
            {list.map((item, idx) => (
              <li
                className="item_dropdown_select_additionals"
                key={idx}
                onClick={() => handleCheck(idx)}
                style={{ cursor: 'pointer' }}
              >
                <Checkbox checked={checkedItems.includes(idx)} />
                <p className="options_dropdown_select_additionals">{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

export default DropDownSelectAdditionals;
