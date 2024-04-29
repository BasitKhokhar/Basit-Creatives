import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
const IconList =() =>{
    window.addEventListener('scroll', function () {
        var Blackiconlist = document.getElementById('black_iconlist');
        Blackiconlist.classList.toggle('black_iconlists', window.scrollY > 305);
    });
    return(
        <div className="icons">
            <div className="Icon_list" id="black_iconlist">
                <ul>
                    <li><a href="https://www.facebook.com/"><IoLogoFacebook /></a></li>
                    <li><a href=""><BsLinkedin /></a></li>
                    <li><a href=""><IoLogoWhatsapp /></a></li>
                    <li><a href=""><IoLogoTwitter /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default IconList;