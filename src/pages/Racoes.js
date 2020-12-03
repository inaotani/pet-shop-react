import React, { useEffect, useState } from "react";
import "./../index.css";
import Layout from "./../components/Layout";
import Grid from "./../components/Grid";

const Racoes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "https://petshop-backend.vercel.app/api/supply",
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWdhX3Bvcl9oakBnbWFpbC5jb20iLCJpZCI6IjVmYjc0N2RhZmQzNTVkYjhlYWYxZjdiYiIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjA2Nzc0NDQ1fQ.Rvk8jNNS8FbKRgq48ks5VHTu5qqFC5OUfFC9nfooh-0",
          },
        }
      );
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <Layout>
      <Grid title="Rações" products={products} />
    </Layout>
  );
};

export default Racoes;
