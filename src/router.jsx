import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"

import Home from "./screens/home"
import About from "./screens/about"
import Email from "./screens/email"
import Phone from "./screens/phone"
import Photo from "./screens/photo"
import Address from "./screens/addres"
import Skills from "./screens/skills"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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



                </Routes>
            </Router>
        </div>
    )


}




export default App