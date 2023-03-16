import React from "react";
 import { IoIosContact } from "react-icons/io";
 import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
 export default function Header(){

    return(
        <>
        <div className="head-1">
        <img src="/images/logo-1.png"/>
                 <ul class="line">
					<li><Link to="/home">HOME</Link></li>
					<li><Link to="/shop"> SHOP</Link></li>
                    <li><Link to="/page">PAGES</Link></li>
					<li><Link to="/contact">CONTACT</Link></li>
				</ul>
                <ul class="yu">
                <li><IoIosContact/></li>
                <li><BsSearch/></li>
                </ul>
        </div>
        <img src="/images/slider-1.jpg"/>

        </>
    )
}