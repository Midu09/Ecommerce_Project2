import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../components/Breadcrums/Breadcrums";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId)); // hoặc e.id == productId nếu id là string

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
    </>
  );
};

export default Product;
