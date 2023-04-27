import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"

import Home from "./screens/home"
import About from "./screens/about"
import Email from "./screens/email"
import Phone from "./screens/phone"
import Photo from "./screens/photo"
import Address from "./screens/addres"
import Skills from "./screens/skills"
import Experience from "./screens/experience"
import Qualification from "./screens/qualification"
import BasicInfo from "./successScreens/basicInfo"
import Download from "./screens/download"


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useSelector } from "react-redux"


const App = () => {



    const state = useSelector(state => state.counter)
    console.log(state)

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
                    <Route path="/qualification" element={<Qualification />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/basicInfo" element={<BasicInfo />} />



                </Routes>
            </Router>
        </div>
    )


}




export default App