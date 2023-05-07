import React from 'react'
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>


            <nav className="navbar bg-light fixed-top shadow">
                <div className="container-fluid container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <i className="fa fa-bars"></i>
                    </button>
                    <NavLink to="/">
                        <img src="/FakeShop.png" alt="logo" style={{height: "50px"}}/>
                    </NavLink>

                    <div>

                        <Link to={"/carts"}>
                            <button className="navbar-toggler" type="button">
                                <i className="fa fa-shopping-cart"></i>
                            </button>
                        </Link>

                        <Link to={"/users"}>
                            <button className="navbar-toggler" type="button">
                                <i className="fa fa-user-circle"></i>
                            </button>
                        </Link>

                        <Link to={"/login"}>
                            <button className="navbar-toggler" type="button">
                                <i className="fa fa-sign-in"></i>
                            </button>
                        </Link>
                    </div>


                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <NavLink to="/">
                                <img src="/FakeShop.png" alt="logo" style={{height: "50px"}}/>
                            </NavLink>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <input className="form-control" list="datalistOptions" id="exampleDataList"
                                   placeholder="Type to search..."/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;