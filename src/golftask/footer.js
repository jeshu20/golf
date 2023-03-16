import React from "react";
import { FiFacebook } from "react-icons/fi"
import { FaPinterest } from "react-icons/fa";

export default function Footer(){

    return(
        <>
        <div className="foot">
                <div className="gjs">
                    
                <ul>
                    <li><h3>Our Store</h3></li>
                    <li><b>Address:</b>No:58 A , East madison Street,</li><br></br>
                    <li>Baltimore,MD,USA 4508</li><br></br>
                    <li><b>phone:</b>0000 123 456789</li><br></br>
                    <li><b>Email:</b>info@gmail.com</li>
				</ul>
                </div>
                <div className="cvn">
                    <h1>opening Hours</h1>
                    <h3>Mon-Fri:6am - 8pm</h3>
                    <h3>Saturday:6am - 8pm</h3>
                    <h3>Sunday:8am - 12pm</h3>
                    </div>
                <div className="mon">
                    <ul>
                    <li><h1>Help</h1></li>
					<li><a href="#">Contact</a></li>
					<li><a href="#"> About Us</a></li>
					<li><a href="#">Shipping</a></li>
                    <li><a href="#">Return</a></li>
				</ul>
                </div>
                <div class="letter">
                    <h1>NEWS LETTER</h1>
                    <input type="email" placeholder="your email address"/><br></br>
                    <button class="btn-cls">SUBSCRIBE</button>
                </div>
                
            </div>
            <div className="pop">
            <h3>© 2023 Golfo-theme Design Themes</h3>
            <span class="ft-1">
             <h1><FiFacebook/><FaPinterest/></h1>
            </span>
           
            </div>
        </>
    )
}