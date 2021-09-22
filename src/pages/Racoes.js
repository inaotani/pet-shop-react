import React, { useEffect, useState } from "react";
import "./../index.css";
import Layout from "./../components/Layout";
import Grid from "./../components/Grid";

const Racoes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3001/products");
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
