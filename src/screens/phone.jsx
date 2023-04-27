
import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


import lottie from "lottie-web"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { set_phone } from "../store/counterslice"
import Navbar from "../components/navbar"



const App = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')

    const container = useRef(null)

    const state = useSelector(state => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {

        setName(state.basic.phone)





        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/phone.json")
        });



    }, [])






    const validateEmail = (email) => {

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );


    };



    // var regName = /^[a-zA-Z ]+$/;

    return (

        <div className="home_base">

            <Navbar name="Profile" />

            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/address") ; dispatch(set_phone(name)) }}>

                <FormGroup className="full_width">
                    <Input defaultValue={state.basic.phone} valid={name.length >= 11 && name.length <= 13} required type="number" onChange={(e) => setName(e.target.value)} bsSize="lg" className="full_width" placeholder="Your Phone"></Input>

                    <FormFeedback invalid >
                        Please enter valid email
                    </FormFeedback>



                </FormGroup>


                <div className="btn_div">
                    <Button onClick={() => navigate("/email")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button disabled={name.length < 11 || name.length > 13} size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>

            </Form>

        </div>

    )
}





export default App