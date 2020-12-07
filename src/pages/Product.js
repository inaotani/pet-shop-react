import React, { useEffect, useState } from "react";
import "./../index.css";
import Layout from "./../components/Layout";
import ProductDisplay from "./../components/ProductDisplay";
import { useParams } from "react-router-dom";
import DivBorder from "../components/DivBorder";

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
      <div className="container" style={{paddingBottom: '2rem'}}>
        <DivBorder>
          <ProductDisplay product={product} />
        </DivBorder>
      </div>
    </Layout>
  );
};

export default Product;
