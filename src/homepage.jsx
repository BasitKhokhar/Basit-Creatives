import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const HomePage = () => {
    const navigate = useNavigate();
    const BackHome = () => {
       navigate('/')
    }
    return(
        <div>
            <img id="hImg" src="images\1 (1).jpg" alt="" />
            <div className="home_data ">
                <div className="Home-Leftdata">
                    <h2 className=" text-4xl font-bold text-white">Hello I'm</h2>
                    <h1 className=" text-8xl font-bold text-white">Muhammad Talha Basit</h1>
                    <h2 className=" text-4xl font-bold text-white">Web Developer from Sargodha,Pakistan</h2>
                    <div className="home_buttons">
                        <a href="#contact"><button className="Home_btn1 text-3xl font-bold  ">Contact me</button></a>
                        <a href="#About1"><button className="Home_btn2 text-3xl font-bold">About me</button></a>
                    </div>
                </div>
                <div className="Home-img">
                 <img src="images\IMG_0202.jpg" alt="" />
                 {/* <div>
                    <h1>2</h1>
                    <h2></h2>
                 </div> */}
                </div>              
            </div>
            <div className="home-footer">
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
                <div className="footer-part1">
                    <div className="footer-part1-left">
                      <img src="src\images\3709753_call_customer_relation_service_support_icon.png" alt="" />
                    </div>
                    <div className="footer-part1-right">
                        <div className=" text-2xl font-bold">Support</div>
                        <div className="text-blue text-xl font-bold">Online 24H</div>
                    </div>
                </div>
            
            </div>
            <div> <a href="#top"><GoToTop/></a> </div>
        </div>
    )
}
export default HomePage;