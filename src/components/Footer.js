import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <section>
                <footer className="text-center text-white" style={{backgroundColor: "#0a4275"}}>

                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2023 Copyright&nbsp;
                        <NavLink className="text-light text-decoration-none" to="/">
                            97's Shop
                        </NavLink>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Footer;
