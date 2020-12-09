import React, { useEffect, useState } from "react";
import "./../index.css";
import Layout from "../components/Layout";
import Grid from "../components/Grid";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const { term } = useParams();

  const json = JSON.stringify({
    search: term,
  });

  useEffect(() => {
    async function getProducts() {
      const url = `https://petshop-backend.vercel.app/api/search/`;
      const access_token =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWQiOiI1ZmMyZTkzYTgzNGQ3OTI4YmViMDQ0NzkiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3MjAyNDE4fQ.Lo0JhQ7EmDiU8fNTi9gvytd3mHrIQ17hpTLjtcIgfWs";

      const requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: access_token,
        },
        body: json,
      };

      const response = await fetch(url, requestOption);
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, [term]);

  return (
    <Layout>
      <h1>Resultado de Busca</h1>
      <Grid products={products} />
    </Layout>
  );
};

export default SearchPage;
