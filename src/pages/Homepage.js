import React from 'react';
import Layout from "./../components/Layout";
import Grid from "./../components/Grid";
import Hero from "./../components/Hero";
import banner1 from './../assets/imgs/banner2.jpg';

const Home = () => {
    return (
        <Layout>
            <Hero banners={[
            { src: banner1, alt: 'Banner de oferta 1' },
            { src: banner1, alt: 'Banner de oferta 2' },
            ]} />
            <Grid />
        </Layout>
    );
};

export default Home;