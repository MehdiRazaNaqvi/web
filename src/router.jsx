import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"

import Home from "./screens/home"
import About from "./screens/about"
import Email from "./screens/email"
import Phone from "./screens/phone"
import Photo from "./screens/photo"
import Address from "./screens/addres"
import Skills from "./screens/skills"
import BasicInfo from "./successScreens/basicInfo"
import Download from "./screens/download"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"



const App = () => {


    

    
    return (
        <div>
            <ToastContainer />
            <Router>
                <Routes>


                    <Route exact path="/web" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/email" element={<Email />} />
                    <Route path="/phone" element={<Phone />} />
                    <Route path="/photo" element={<Photo />} />
                    <Route path="/address" element={<Address />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/basicInfo" element={<BasicInfo name="mehdi" />} />



                </Routes>
            </Router>
        </div>
    )


}




export default App