import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Carousel from "bootstrap/js/src/carousel";
import Category from "./components/Category";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/product/:id" element={<Product/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
