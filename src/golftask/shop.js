import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

export default function Shop(){
    return(
        <>
            <div class="overall">
            <h1>Professional Shop for Golf With all<br></br>Products that you Need</h1>
        <div class="grid-3">
            <div class="all">
                <img src="/images/kit.png"/>
                <p>Golf Kit</p>
                <span>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiOutlineStar/></i>
                 </span>
                 <p>$800  <del>$7999.00</del></p>
            </div>
            <div class="all">
                <img src="/images/sticks.png"/>
                <p>M3 Putter</p>
                <span>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiOutlineStar/></i>
                 </span>
                 <p>$150</p>
            </div>
            <div class="all">
                <img src="/images/wball.png"/>
                <p>Bamboo Tees</p>
                <span>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                 </span>
                 <p>$250</p>
            </div>
            <div class="all">
                <img src="/images/ane.png"/>
                <p>Plastic Tees</p>
                <span>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                    <i><AiFillStar/></i>
                 </span>
                 <p>$140</p>
            </div>
        </div>
        </div>
        </>
    )
}