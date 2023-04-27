

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



import lottie from "lottie-web"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { set_intro } from "../store/counterslice"
import Navbar from "../components/navbar"



const App = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [submit, setSubmit] = useState('')
    const container = useRef(null)

    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)

    useEffect(() => {


        setName(state.basic.intro)

    


        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/about.json")
        });


    }, [])







    return (

        <div className="home_base">

            <Navbar name="Profile" />

            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/email"); dispatch(set_intro(name)) }}>
                <FormGroup className="full_width">
                    <Input defaultValue={state.basic.intro} style={{ height: "4rem" }} type="textarea" required onChange={(e) => setName(e.target.value)} valid={name != ""} bsSize="lg" className="full_width" placeholder="Your Introduction"></Input>
                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/web")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button disabled={name == ""} size="lg" type="submit" color="success" className="half_width">Next</Button>

                </div>


            </Form>

        </div>

    )
}





export default App