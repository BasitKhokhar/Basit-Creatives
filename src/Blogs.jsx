import React from "react";
import Header from "./Components/Header";
import { NavLink, useNavigate } from "react-router-dom";
const Blogs = () => {
    const navigate= useNavigate();

    const BackHome =() =>{
        navigate('/')
    }
    return (
        <>
            <div><Header/></div>
            <button onClick={() => BackHome()}>go back to Home</button>
            <h1>Blogs Page data</h1>
        </>

    )
}
export default Blogs;