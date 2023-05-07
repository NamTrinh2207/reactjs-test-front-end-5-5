import React, {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import {NavLink} from 'react-router-dom';
import axios from "axios";

function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        let componentMounted = true;
        const getProdcuts = async () => {
            setLoading(true);
            const response = await fetch(' http://localhost:8080/products/');
            if (componentMounted) {
                const data = await response.json();
                setData(data);
                setFilter(data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();
    }, []);

    useEffect(() => {
        const getCategory = async () => {
            axios.get('http://localhost:8080/api/category').then(res => {
                setCategory(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.error(err)
            })
        }
        getCategory();
    }, []);
    const Loading = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                    <div className="position-sticky" style={{top: "100px"}}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        {category.map((category) => {
                            return (
                                <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct(category.id)}>{category.categoryName}</button>
                            )
                        })
                        }
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={400} width={"100%"}/>
                        </div>
                    </div>

                </div>


            </>
        )
    }

    const filterProduct = (category) => {
        const updateList = data.filter((x) => x.categoryId === category);
        setFilter(updateList);
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="col-md-3 my-3">

                    <div className="position-sticky" style={{top: "100px"}}>
                        <button className="btn btn-outline-dark m-1 btn-sm" onClick={() => setFilter(data)}>All</button>
                        {category.map((category) => {
                            return (
                                <button key={category.id} className="btn btn-outline-dark m-1 btn-sm" onClick={() => filterProduct(category.id)}>{category.categoryName}</button>
                            )
                        })
                        }
                    </div>

                </div>

                <div className="col-md-9 py-md-3">
                    <div className="row">
                        {filter.map((product) => {
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>

                                    <div className="card h-100">
                                        <img src={product.picture} className="m-3"
                                             style={{height: "300px", width: "auto", objectFit: "contain"}}
                                             alt={product.name}/>
                                        <div className="m-3 mb-0">
                                            <small className="card-title">{product.name}...</small>
                                        </div>
                                        <div style={{marginTop: "auto"}}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3"><b>${product.price}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                    <button className="btn btn-sm m-3 border-primary">
                                                        <i className="fa fa-arrow-right text-muted"></i>
                                                    </button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>


            </>
        )
    }

    return (
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProducts/>}
            </div>
        </div>
    )
}

export default Products