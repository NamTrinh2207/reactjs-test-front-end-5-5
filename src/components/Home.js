import React from 'react'
import Products from './Products';
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <div className="container px-0" style={{ marginTop: "66px" }}>
                <Header/>
                <Products />
                <Footer/>
            </div>
        </>
    )
}

export default Home;