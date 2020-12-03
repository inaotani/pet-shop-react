import React, { useEffect, useState } from "react";
import "./../index.css";
import Layout from "./../components/Layout";
import ProductDisplay from "./../components/ProductDisplay";
import productImg from "./../assets/imgs/produto1.png";
import { useParams } from "react-router-dom";

const produtInfo = {
  name: "Royal Canin - Adulto - 15kg",
  price: "235,99",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod egestas sollicitudin. Nulla ut lectus nec arcu cursus fermentum ac ut ligula.",
  img: {
    src: productImg,
    alt: "Ração Royal Canin",
  },
};

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(produtInfo);

  useEffect(() => {
    async function getProduct() {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://petshop-backend.vercel.app/api/supply/${id}`,
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWdhX3Bvcl9oakBnbWFpbC5jb20iLCJpZCI6IjVmYjc0N2RhZmQzNTVkYjhlYWYxZjdiYiIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjA2Nzc0NDQ1fQ.Rvk8jNNS8FbKRgq48ks5VHTu5qqFC5OUfFC9nfooh-0",
          },
        }
      );
      const data = await response.json();
      setProduct(data);
    }

    getProduct();
  }, []);

  return (
    <Layout>
      <ProductDisplay
        product={{
          name: product.name,
          price: product.price,
          description: product.description,
          img: { src: productImg, alt: product.name },
        }}
      />
    </Layout>
  );
};

export default Product;
