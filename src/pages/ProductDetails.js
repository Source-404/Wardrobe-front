import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>The product details</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetails;
