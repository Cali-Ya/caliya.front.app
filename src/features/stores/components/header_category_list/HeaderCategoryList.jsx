//css
import './header_category_list.css';
//icons
import CaretIconRigth from '../../../../components/caret_icons/caret_icon_rigth/CaretIconRight';

const HeaderCategoryList = ({ title, isExpanded, handleIsExpanded }) => {
  return (
    <header className="header_store_categories">
      <h1 className="header_store_categories__title">{title}</h1>
      {/*   <CaretIconRigth
        type="expand"
        preferColor={false}
        isCaretRight={isExpanded}
        onClick={handleIsExpanded}
        className="header_store_categories__icon"
      /> */}
    </header>
  );
};

export default HeaderCategoryList;
