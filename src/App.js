import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
function App() {
    return (
        <BrowserRouter>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Home/>}/>
                <Route path="/products/:id" element={<Product/>}/>
                <Route path="/signup" element={<SignUpForm/>}/>
                <Route path="/login" element={<LoginForm/>}/>
            </Routes>

        </BrowserRouter>
    );
}
export default App;
