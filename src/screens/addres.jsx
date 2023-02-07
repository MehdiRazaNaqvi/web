

import alanBtn from "@alan-ai/alan-sdk-web"

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"




import lottie from "lottie-web"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../components/navbar"
import { set_address } from "../store/counterslice"



const App = () => {

    const navigate = useNavigate()
    const state = useSelector(state => state.counter)


    const [name, setName] = useState('')
    const [submit, setSubmit] = useState('')
    const container = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {


        setName(state.basic.address)


        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/address.json")
        });


    }, [])







    return (

        <div className="home_base">
            <Navbar name="Profile" />


            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/skills"); dispatch(set_address(name)) }}>

                <FormGroup className="full_width">
                    <Input defaultValue={state.basic.address} required onChange={(e) => setName(e.target.value)} valid={name != ""} bsSize="lg" className="full_width" placeholder="Your City"></Input>
                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/phone")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button disabled={name == ""} size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>


            </Form>


        </div>

    )
}





export default App