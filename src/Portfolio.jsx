import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";

import { HiArrowSmRight } from "react-icons/hi";
import Header from "./Components/Header";

const Portfolio = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div id="top" className="portfolio_header"><Header /></div>
            <div className="portfolio mt-48">
                <a href="src\Projects\SASS-project3-Veuey"><h1 className=" text-6xl font-bold text-center">Portfolio</h1></a>
                <div className="web_projects">
                    {/* for desinging boxes are added */}
                    <div className="top_left_box" data-aos="fade-right"></div>
                    <div className="bottom_right_box" data-aos="fade-up"></div>
                    <div className="web_projects-container">
                        {/* project1 */}
                        <div className="web_project" data-aos="fade-up">
                            <img src="src\images\1 (1).jpg" alt="" />
                            <h1 className=" text-6xl font-bold text-white">WebSites Projects</h1>
                            <NavLink to="/webprojects"><div className="view_project"><h2>View Projects</h2><div className="arrow_icon"><HiArrowSmRight /></div></div></NavLink>
                        </div>
                        <div className="web_project" data-aos="fade-up">
                            <img src="src\images\2.jpg" alt="" />
                            <h1 className=" text-6xl font-bold text-white">Figma to Html</h1>
                            <NavLink to="/FigmaProjects"><div className="view_project"><h2>View Projects</h2><div className="arrow_icon"><HiArrowSmRight /></div></div></NavLink>
                        </div>
                        <div className="web_project" data-aos="fade-up">
                            <img src="src\images\3.jpg" alt="" />
                            <h1 className=" text-6xl font-bold text-white">WebSites Projects</h1>
                            <div className="view_project"><h2>View Projects</h2><div className="arrow_icon"><HiArrowSmRight /></div></div>
                        </div>
                        <div className="web_project" data-aos="fade-up">
                            <img src="src\images\4.jpg" alt="" />
                            <h1 className=" text-6xl font-bold text-white">WebSites Projects</h1>
                            <div className="view_project"><h2>View Projects</h2><div className="arrow_icon"><HiArrowSmRight /></div></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Portfolio;