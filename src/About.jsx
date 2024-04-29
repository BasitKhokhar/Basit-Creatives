import React from "react";
import Header from "./Components/Header";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Blogs from "./Blogs";
import Skills from "./Components/Skills";

const About = () => {
    
    const navigate= useNavigate();
    const goToContact =() =>{
      navigate('/Blogs')
    }
    return (
        <>
            <div className="about_header"><Header/></div>
            <h1 className=" text-center text-6xl font-bold mt-40">About me</h1>
            {/* <button onClick={()=> goToContact ()}>Go to Blogs Page</button> */}
            <div className="About" id="About">
                <div className="about_pic">
                    <img src="images\IMG_0836.jpg" alt="" />
                </div>
                <div className="about_data">
                    <h2 className=" text-4xl font-bold">I'm a Developer</h2>
                    <h1 className=" text-6xl font-bold">I Develop Web Sites that <br></br> Help People</h1>
                    <p className=" text-2xl">Hi there! I'm Muhammad Talha Basit, a passionate web developer <br></br> with over 1.5 years of experience building beautiful and functional websites.<br></br> I specialize in front-end development using Html,CSS  JavaScript and <br></br> React JS , crafting user-friendly and interactive experiences.</p>
                    <div><NavLink to="/portfolio"><button className="about_portfolio_btn">View Portfolio</button></NavLink></div>
                   
                </div>
            </div>
            <div> <Skills/> </div>
        </>

    )
}
export default About;