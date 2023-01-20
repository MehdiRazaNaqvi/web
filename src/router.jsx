import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"

import Home from "./screens/home"
import About from "./screens/about"

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



                </Routes>
            </Router>
        </div>
    )


}




export default App