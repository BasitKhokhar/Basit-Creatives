import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services';
import Portfolio from './Portfolio';
import Blogs from './Blogs';
import Contacts from './Contacts';
import Header from './Components/Header';
import Error from './Components/Error';
import MainHeader from './MainHeader';
import skills from './Components/Skills';
import WebProjects from './Components/webprojects';
import { Link } from 'react-router-dom';
import FigmaProjects from './Components/FigmaProjects';
function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<div><h1>Basit Khokhar</h1></div>}>
    //     </Route>
    //     <Route path="/Bs" element={<div><h1>Talha Khokhar</h1></div>}>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>  Inline styling
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}>
        </Route>
        <Route path="/About" element={<About />}>
        </Route>
        <Route path="/Portfolio" element={<Portfolio />}>
        </Route>
        <Route path="/Services" element={<Services />}>
        </Route>
        <Route path="/Blogs" element={<Blogs />}>
        </Route>
        <Route path="/Contacts" element={<Contacts />}>
        </Route>
        <Route path="*" element={<Error />}>
        </Route>
        <Route path='/webprojects' element={<WebProjects/>}></Route>
        <Route path='/FigmaProjects' element={<FigmaProjects/>}></Route>
        <Route path='/porfolio' element={<Portfolio/>}></Route>
      </Routes>
    </BrowserRouter>



  )
}

export default App
