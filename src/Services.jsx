import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";
import Header from "./Components/Header";
const Services = () => {
    const navigate= useNavigate();
    const goToContact =() =>{
      navigate('/Blogs')
    }
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div>
            <div className="Services_header"><Header/></div>
            <h1 className="servics-h1 text-6xl font-bold text-center">Services</h1>
            <div className="services">
                <div className="serivce1 bg-blue-700" data-aos="fade-up" >
                    <div className="service_icon "></div>
                    <h1 className=" text-6xl font-bold ">Web Development</h1>
                    <p className=" text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea dignissimos quas aspernatur at fugit aliquid corrupti, molestiae voluptatibus suscipit ullam sint totam soluta alias provident magni illo id labore.</p>
                </div>
                <div className="serivce1 " data-aos="fade-up">
                    <div className="service_icon "></div>
                    <h1 className=" text-6xl font-bold ">Web Apps</h1>
                    <p className=" text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea dignissimos quas aspernatur at fugit aliquid corrupti, molestiae voluptatibus suscipit ullam sint totam soluta alias provident magni illo id labore.</p>
                </div>
                <div className="serivce1 " data-aos="fade-up">
                    <div className="service_icon "></div>
                    <h1 className=" text-6xl font-bold ">Figma to HTML</h1>
                    <p className=" text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea dignissimos quas aspernatur at fugit aliquid corrupti, molestiae voluptatibus suscipit ullam sint totam soluta alias provident magni illo id labore.</p>
                </div>
                <div className="serivce1  bg-blue-700" data-aos="fade-up"> 
                    <div className="service_icon "></div>
                    <h1 className=" text-6xl font-bold ">PSD to HTML</h1>
                    <p className=" text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea dignissimos quas aspernatur at fugit aliquid corrupti, molestiae voluptatibus suscipit ullam sint totam soluta alias provident magni illo id labore.</p>
                </div>
                <div className="serivce1 bg-blue-700" data-aos="fade-up">
                    <div className="service_icon "></div>
                    <h1 className=" text-6xl font-bold ">PSD to HTML</h1>
                    <p className=" text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea dignissimos quas aspernatur at fugit aliquid corrupti, molestiae voluptatibus suscipit ullam sint totam soluta alias provident magni illo id labore.</p>
                </div>
                <div className="serivce1" data-aos="fade-up">
                    <div className="service_icon "></div>
                    <h1 className=" text-6xl font-bold ">PSD to HTML</h1>
                    <p className=" text-2xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia ea dignissimos quas aspernatur at fugit aliquid corrupti, molestiae voluptatibus suscipit ullam sint totam soluta alias provident magni illo id labore.</p>
                </div>
            </div>
        </div>
    )
}
export default Services;