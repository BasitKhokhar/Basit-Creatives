import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
// import React, { useState } from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const CvImage = "/src/images/Blue White Minimalist Web Designer Resume.png";

const Header = () => {

    // for downloadin cv Code //
    const CVPicFile =(url)=>{
        const filename=url.split("/").pop();
     const aTag=document.createElement("a");
     aTag.href= url;
     aTag.setAttribute("download",filename);
     document.body.appendChild(aTag);
     aTag.click();
     aTag.remove();
    }

    // three lines display code//
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    // Onscroll navbar color change code// 
    const [scrollY, setScrollY] = useState(0);
    const [topBarColor, setTopBarColor] = useState('white');
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        if (scrollY > 500) {
          setTopBarColor('#6d7ed0'); // Change the color to whatever you like
        } else {
          setTopBarColor('white');
        }
      };
      window.addEventListener('scroll', handleScroll);
      // Cleanup function to remove the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollY]);

    return (
        <div className="navbar" id="header1" style={{ backgroundColor: topBarColor}}>
            <ul className="header-logo flex" >
                <li><h1 className="icon text-4xl font-bold">B</h1></li>
                <li><h1 className="icon_name text-5xl font-serif font-bold">Basit Creatives</h1></li>
            </ul>
            <ul className={showMenu ? "nav-links show" : "nav-links"}>
                <li className=" mt-5 text-2xl font-serif font-bold">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className=" mt-5 text-2xl font-serif font-bold">
                    <NavLink to="/About">About</NavLink>
                </li>
                <li className=" mt-5 text-2xl font-serif font-bold">
                    <NavLink to="/Portfolio">Portfolio</NavLink>
                </li>
                <li className=" mt-5 text-2xl font-serif font-bold">
                    <NavLink to="/Services">Services</NavLink>
                </li>
                <li className=" mt-5 text-2xl font-serif font-bold">
                    <NavLink to="/Blogs">Blogs</NavLink>
                </li>
                <li className=" mt-5 text-2xl font-serif font-bold">
                    <NavLink to="/Contacts">Contacts</NavLink>
                </li>
                <li>
                    <NavLink><button className="Cv-btn" onClick={()=>{CVPicFile(CvImage)}}>Download CV</button></NavLink>
                </li>
            </ul>
            <div className={showMenu ? "menu-icon active" : "menu-icon"} onClick={handleMenuClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
        // <>
        //     <header >
        //         <nav ref={navRef}>
        //             <div className="nav-header">
        //                 <div className="Header" id="header">
        //                     <ul className="header-logo">
        //                         <li><h1 className="icon text-4xl font-bold">B</h1></li>
        //                         <li><h1 className="icon_name text-4xl font-serif font-bold">Basit Creatives</h1></li>
        //                     </ul>
        //                     < ul className="header_listdata text-2xl font-bold" id="navlist">
        //                         <li className=" mt-4">
        //                             <NavLink to="/">Home</NavLink>
        //                         </li>
        //                         <li className=" mt-4">
        //                             <NavLink to="/About">About</NavLink>
        //                         </li>
        //                         <li className=" mt-4">
        //                             <NavLink to="/Portfolio">Portfolio</NavLink>
        //                         </li>
        //                         <li className=" mt-4">
        //                             <NavLink to="/Services">Services</NavLink>
        //                         </li>
        //                         <li className=" mt-4">
        //                             <NavLink to="/Blogs">Blogs</NavLink>
        //                         </li>
        //                         <li className=" mt-4">
        //                             <NavLink to="/Contacts">Contacts</NavLink>
        //                         </li>
        //                         <li>
        //                             <NavLink><button className="Cv-btn">Download CV</button></NavLink>
        //                         </li>
        //                         <li><div className="nav-close-btn" onClick={removeNavbar}><FaTimes/></div></li>
        //                     </ul>

        //                     <ul>
        //                         <div className="nav-btn" onClick={showNavbar}>
        //                             <FaBars />
        //                         </div>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </nav>
        //     </header>
        // </>
    )
}
export default Header;