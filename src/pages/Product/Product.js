import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ProductDisplay from "../../components/ProductDisplay";
import { useParams } from "react-router-dom";
import DivBorder from "../../components/DivBorder";
import "./style.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://petshop-backend.vercel.app/api/product/${id}`
      );
      const data = await response.json();
      setProduct(data);
    }

    getProduct();
  }, []);

  return (
    <Layout>
      <div className="container product-page" style={{ paddingBottom: "2rem" }}>
        <DivBorder>
          <ProductDisplay product={product} />
        </DivBorder>
      </div>
    </Layout>
  );
};

export default Product;
