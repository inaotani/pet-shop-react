import React from "react";
import "./../index.css";
import Layout from './../components/Layout';
import Grid from './../components/Grid';
import Search from './../components/Search';


const Racoes = () => {
    return (
        <Layout>
            <Search />
            <Grid title="Rações" />
        </Layout>
    );
};

export default Racoes;