import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Input from "../../components/Input";
import { useParams } from "react-router-dom";
import DivBorder from "../../components/DivBorder";
import Btn from "../../components/Btn";
import './style.css';

const EditProduct = () => {
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

      function handleEdit(e) {
        e.preventDefault();
        console.log(e);
        const json = JSON.stringify({
          name: e.target.name.value,
          description: e.target.description.value,
          photo: e.target.photo.value,
          price: e.target.price.value,
          stock: e.target.stock.value,
        });

        async function editProduct() {
          const url = `https://cors-anywhere.herokuapp.com/https://petshop-backend.vercel.app/api/supply/${product._id}`;
      
          const requestOption = {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: json,
          };
      
          const response = await fetch(url, requestOption).then((response) => {
            if (response.status === 200) {
              console.log("ok");
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
                    <form method="POST" onSubmit={handleEdit}>
                        <img src={"data:image/png;base64," + product.photo}  alt={product.name} />
                        <Input type="text" id="name" name="name" value={product.name} label="Nome" />
                        <Input type="text" id="description" name="description" value={product.description} label="Descrição" />
                        <Input type="text" id="photo" name="photo" value={product.photo} label="Foto (formato base 64)" />
                        <Input type="number" id="price" name="price" value={product.price} label="Preço" />
                        <Input type="number" id="stock" name="stock" value={product.stock} label="Estoque" />
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