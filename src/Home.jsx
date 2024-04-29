
import React, { useEffect,useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import Header from "./Components/Header";
import About from "./About";
import Skills from "./Components/Skills";
import GoToTop from "./Components/gototop";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";
import Footer from "./footer";
import IconList from "./Components/IconsList";
import WebProjects from "./Components/webprojects";
import Navbar from "./Components/Header";
import { AiFillTrophy } from "react-icons/ai";
const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  

// console.log(useState('ALi Haider'));
  
    // var newname="Talha Basit"
    // in use state the first thing conatin the initial value/state and the second contain new/updated value//
    const[myName, setMyName]=useState('Talha Basit')

    const changeName =()=>{
        setMyName("Basit Khokhar")
    } 
    const firstName=()=>{
        setMyName('Talha Basit')
    }
    console.log(myName)

    var newBgColor=document.getElementById('BgChange');
    
    return (
        // <div>
        //     {/* we can use jS in html directly  */}
        //     <h1 className=" text-4xl m-16" id="BgChange">{myName}</h1>
        //     <button className=" bg-slate-400 p-5" onClick={changeName}>New Name</button>
        //     <button className=" bg-orange-400 p-5 ml-12" onClick={firstName}>Old Name</button>
        //     <button className=" bg-red-400 p-5 ml-12">change bg color</button>
        // </div>
        <div className="Home_body">
            <div id="top"><Navbar /></div>
            <img id="hImg" src="images\1 (1).jpg" alt="" />
            <div className="home_data ">
                <div className="Home-Leftdata">
                    <h2 className=" text-4xl font-bold text-white">Hello I'm</h2>
                    <h1 className="home-h1  font-bold text-white">Muhammad Talha Basit</h1>
                    <h2 className=" text-4xl font-bold text-white">Web Developer from Sargodha,Pakistan</h2>
                    <div className="home_buttons">
                        <a href="#contact"><button className="Home_btn1 text-3xl font-bold ">Contact me</button></a>
                        <a href="#About1"><button className="Home_btn2 text-3xl font-bold">About me</button></a>
                    </div>
                </div>
                <div className="Home-img">
                    <img src="images\IMG_0202.jpg" alt="" />
                    <div className="Home-img-experienceicon">
                        <h1 className=" text-7xl font-bold text-blue-500">2</h1>
                        <h2 className=" text-2xl font-bold mt-2">Years of<br></br>Success</h2>
                    </div>
                    <div className="Home-img-trophy">
                        <div ><AiFillTrophy /></div>
                    </div>
                    <div className="Home-img-projectnbr">
                        <h1 className=" text-7xl font-bold text-red-500">10+</h1>
                        <h2 className=" text-2xl font-bold mt-2">Projects<br></br>Completed</h2>
                    </div>
                </div>

            </div>
            <div className="home-footer" data-aos="fade-up">
                <div className="footer-part1">
                    <div className="footer-part1-left">
                        <img src="src\images\7067441_achievment_badge_medal_icon.png" alt="" />
                    </div>
                    <div className="footer-part1-right">
                        <div className=" text-2xl font-bold">1.5 Years Job</div>
                        <div className="text-blue text-xl font-bold">Experience</div>
                    </div>
                </div>
                <div className="footer-part1">
                    <div className="footer-part1-left">
                        <img src="src\images\3448012_managament_manager_organize_planning_productivity_icon.png" alt="" />
                    </div>
                    <div className="footer-part1-right">
                        <div className=" text-2xl font-bold">10+ Projects</div>
                        <div className="text-blue text-xl font-bold">Completed</div>
                    </div>
                </div>
                <a href="#contact"> <div className="footer-part1 ">
                    <div className="footer-part1-left">
                        <img src="src\images\3709753_call_customer_relation_service_support_icon.png" alt="" />
                    </div>
                    <div className="footer-part1-right">
                        <div className=" text-2xl font-bold">Support</div>
                        <div className="text-blue text-xl font-bold">Online 24H</div>
                    </div>
                </div></a>

            </div>
            <div> <a href="#top"><GoToTop /></a> </div>
            <div><IconList /></div>
            {/* About Component */}
            <div id="About1"><About /></div>
            <div> <Portfolio /> </div>
            <div> <Services /> </div>
            <div id="contact" ><Contacts /></div>
            <div> <Footer /> </div>

        </div>
    )
}
export default Home;
