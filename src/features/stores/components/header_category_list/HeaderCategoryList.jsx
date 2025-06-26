//css
import './header_category_list.css';
//icons
import CaretIconRigth from '../../../../components/caret_icons/caret_icon_rigth/CaretIconRight';

const HeaderCategoryList = ({ title, isExpanded, handleIsExpanded }) => {
  return (
    <header className="header_store_categories">
      <h1 className="header_store_categories__title">{title}</h1>
    </header>
  );
};

export default HeaderCategoryList;
