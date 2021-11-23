import React, { useEffect, useState } from "react";
import useArrowKeyNavigationHook from "react-arrow-key-navigation-hook";
import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import Hero from "../../components/Hero";
import banner1 from "./../../assets/imgs/banner.jpg";
import banner2 from "./../../assets/imgs/banner2.jpg";
import bannerOffer from "./../../assets/imgs/banner3.jpg";
import BannerOffer from "./../../components/BannerOffer";
import "./styles.css";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const parentRef = useArrowKeyNavigationHook({ selectors: "a,button,input,span" });

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);
  return (
    <Layout ref={parentRef}>
      <Hero
        banners={[
          { src: banner1, alt: "Imagem de um cachorro. Ao lado está escrito: Seu Pet precisa, a gente tem, confira nossos produtos" },
          { src: banner2, alt: "Imagem de um cachorro deitado na grama ao lado de dois sacos de ração" },
        ]}
      />
      <BannerOffer
        banner={{ src: bannerOffer, alt: "Logotipo da Kirkland Signature em destaque, ao lado três pacotes de ração de gato da marca" }}
        title="Oferta do Dia"
      />
      <Grid title="Nossos Produtos" products={products} />
    </Layout>
  );
};

export default Homepage;
