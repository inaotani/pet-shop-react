import React from "react";
import "./../index.css";
import Layout from './../components/Layout';
import Grid from './../components/Grid';
import Search from './../components/Search';


const Racoes = () => {
    return (
        <Layout>
            <Search />
            <h1>Rações</h1>
            <Grid />
        </Layout>
    );
};

export default Racoes;