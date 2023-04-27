

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




import lottie from "lottie-web"
import { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"
import { set_email } from "../store/counterslice"
import Navbar from "../components/navbar"



const App = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')

    const container = useRef(null)

    const state = useSelector(state => state.counter)

    const dispatch = useDispatch()

    useEffect(() => {


        setName(state.basic.email)

        


        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/email.json")
        });



    }, [])






    const validateEmail = (email) => {

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );


    };



    
    return (

        <div className="home_base">

            <Navbar name="Profile" />


            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/phone"); dispatch(set_email(name)) }}>

                <FormGroup className="full_width">
                    <Input defaultValue={state.basic.email} required onChange={(e) => setName(e.target.value)} valid={validateEmail(name)} invalid={name != "" && !validateEmail(name)} bsSize="lg" className="full_width" placeholder="Your Email"></Input>

                    <FormFeedback invalid >
                        Please enter valid email
                    </FormFeedback>



                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/about")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button disabled={name != "" && !validateEmail(name)} size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>

            </Form>

        </div>

    )
}





export default App