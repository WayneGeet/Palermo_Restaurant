import React from 'react';
import "./Nav.css";

import logo from "../../images/PNG-images-Plate-34png.png";
import chef from "../../images/food_a.png";
const Nav = () => {
  return (
    <div>
        <header className="container">
            <nav className="main_nav">
                <div className="logo"><a href="/home">
                    <img src={logo} alt="plate logo" />
                    <span className="logo-text">Palermo</span>
                    </a>
                </div>

                <ul className="list-items">
                    <li className='item'><a href="/home">Home</a></li>
                    <li className='item'><a href="/about">About</a></li>
                    <li className='item'><a href="/foods">Foods</a></li>
                    <li className='item'><a href="/find_us">Find Us</a></li>
                    <li className='btn'><button type="submit">Sign Up</button></li>
                </ul>
            </nav>

            <section className="hero">
                <div className="text">
                    <h1 className="title">
                        Take your taste buds on <br /> an adventure today by dining with us 
                    </h1>
                    <p className="info">
                        Palermo is a food restaurant distributed around the US in different states,
                        serving the good citizens with mouth watering meals. Have you stopped by?
                    </p>

                    <button className="find_us">Find Us</button>
                </div>

                <div className="img-container">
                    <div className="img-wrapper">
                        <img src={chef} alt="chef" />
                    </div>
                </div>
                
            </section>
                
        </header>
    </div>
  )
}

export default Nav