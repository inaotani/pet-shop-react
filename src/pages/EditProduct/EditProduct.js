import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { Link, useParams } from "react-router-dom";
import DivBorder from "../../components/DivBorder";
import FileBase64 from "react-file-base64";
import "./style.css";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [files, setFiles] = useState([0]);

  function getFiles(files) {
    setFiles(files);
  }

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

  function handleEdit(e) {
    e.preventDefault();
    const json = JSON.stringify({
      id: product._id,
      name: e.target.name.value,
      description: e.target.description.value,
      photo: files.base64,
      price: e.target.price.value,
      stock: e.target.stock.value,
    });

    async function editProduct() {
      const url = `https://petshop-backend.vercel.app/api/supply/`;
      const access_token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWQiOiI1ZmMyZTkzYTgzNGQ3OTI4YmViMDQ0NzkiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3MjAyNDE4fQ.Lo0JhQ7EmDiU8fNTi9gvytd3mHrIQ17hpTLjtcIgfWs";

      const requestOption = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: access_token,
        },
        body: json,
      };

      const response = await fetch(url, requestOption).then((response) => {
        if (response.status === 200) {
          console.log("ok");
          window.location.reload();
        } else {
          console.log("error");
        }
      });
    }

    editProduct();
  }

  return (
    <Layout>
      <div className="container edit-product">
        <DivBorder>
          <Link to="/estoque">Voltar</Link>
          <h1>Adicionar Produto</h1>
          <form method="POST" onSubmit={handleEdit}>
            <img src={product.photo} alt={product.name} />
            <Input
              type="text"
              id="name"
              name="name"
              value={product.name}
              label="Nome"
            />
            <Input
              type="text"
              id="description"
              name="description"
              value={product.description}
              label="Descrição"
            />
            <FileBase64 onDone={getFiles.bind(this)} />
            <Input
              type="number"
              id="price"
              name="price"
              value={product.price}
              label="Preço"
              step="0.01"
            />
            <Input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              label="Estoque"
            />
            <div>
              <input type="submit" value="Alterar" />
            </div>
          </form>
        </DivBorder>
      </div>
    </Layout>
  );
};

export default EditProduct;
