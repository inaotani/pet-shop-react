import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import DivBorder from "../../components/DivBorder";
import './style.css';
import { Link, useHistory } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory();
      function handleAdd(e) {
        e.preventDefault();
        const json = JSON.stringify({
          name: e.target.name.value,
          description: e.target.description.value,
          photo: e.target.photo.value,
          price: e.target.price.value,
          stock: e.target.stock.value,
        });

        async function addProduct() {
          const url = `https://petshop-backend.vercel.app/api/supply/`;
          const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWQiOiI1ZmMyZTkzYTgzNGQ3OTI4YmViMDQ0NzkiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA3MjAyNDE4fQ.Lo0JhQ7EmDiU8fNTi9gvytd3mHrIQ17hpTLjtcIgfWs";
      
          const requestOption = {
            method: "POST",
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
              history.push("/estoque"); 
            } else {
              console.log("error");
            }
          });
        }

        addProduct();

      }

      return (
        <Layout>
            <div className="container add-product">
                <DivBorder>
                  <Link to="/estoque">Voltar</Link>
                    <h1>Adicionar Produto</h1>
                    <form method="POST" onSubmit={handleAdd}>
                        <Input type="text" id="photo" name="photo" label="Foto" placeholder="Código da imagem em base 64" />
                        <Input type="text" id="name" name="name" label="Nome" placeholder="Nome do produto" />
                        <Input type="text" id="description" name="description" label="Descrição" placeholder="Descrição" />
                        <Input type="number" id="price" name="price" label="Preço" step="0.01" />
                        <Input type="number" id="stock" name="stock" label="Estoque" />
                        <div>
                          <input type="submit" value="Adicionar" />
                        </div>
                        
                    </form>
                </DivBorder>
            </div>
        </Layout>
      );
};

export default AddProduct;