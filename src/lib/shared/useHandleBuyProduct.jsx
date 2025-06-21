//globals
import useBuyProduct from '../../features/stores/store/buy_product.store';
//custom hook
import { useNavigate } from 'react-router-dom';
//const
import { AllPathRoutes } from '../../const/AllPathRoutes';

const useHandleBuyProduct = () => {
  //global
  const { setPurcharseInformationProduct } = useBuyProduct();

  //navigate
  const navigate = useNavigate();

  const handleBuyProduct = ({
    id,
    category_id,
    shopInfo,
    name,
    description,
    price,
    prev_price,
    image,
  }) => {
    setPurcharseInformationProduct({
      id,
      shopInfo,
      category_id,
      name,
      description,
      price,
      prev_price,
      image,
    });

    navigate(AllPathRoutes.buy_product);
  };

  return handleBuyProduct;
};

export default useHandleBuyProduct;
