import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Footer from './components/Footer';
import {Route, Routes} from 'react-router-dom';
import Carousel from "bootstrap/js/src/carousel";
import Category from "./components/Category";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/product/:id" element={<Product/>}/>
                <Route path="/signup" element={<SignUpForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
