import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import Hero from "../../components/Hero";
import banner1 from "./../../assets/imgs/banner2.jpg";
import bannerOffer from "./../../assets/imgs/banner3.jpg";
import BannerOffer from "./../../components/BannerOffer";
import "./styles.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(
        "https://petshop-backend.vercel.app/api/supply"
      );
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);
  return (
    <Layout>
      <Hero
        banners={[
          { src: banner1, alt: "Banner de oferta 1" },
          { src: banner1, alt: "Banner de oferta 2" },
        ]}
      />
      <BannerOffer
        banner={{ src: bannerOffer, alt: "Banner de oferta" }}
        title="Oferta do Dia"
      />
      <Grid title="Nossos Produtos" products={products} />
    </Layout>
  );
};

export default Homepage;
