

import alanBtn from "@alan-ai/alan-sdk-web"

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { generateToken } from "../firebase-config"
import axios from "axios"
import { toast } from "react-toastify"
import addNotification from "react-push-notification"
import Logo from "../assets/speaker.png"

import lottie from "lottie-web"
import { useRef } from "react"



const App = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [submit, setSubmit] = useState('')
    const container = useRef(null)

    useEffect(() => {

        // function updateScreen(time) {

        //     alanBtn({

        //         key: "e8fa9817b3cb393fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

        //         onCommand: (commandData) => {

        //             if (commandData.command === "name") {

        //                 console.log(commandData.data)
        //                 setName(commandData.data)
        //                 navigate("/about")

        //             }


        //         }
        //     })
        // }


        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/address.json")
        });


        // requestAnimationFrame(updateScreen);
    }, [])







    return (

        <div className="home_base">

            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/skills") }}>

                <FormGroup className="full_width">
                    <Input style={{ height: "7rem" }} type="textarea" required onChange={(e) => setName(e.target.value)} valid={name != ""} bsSize="lg" className="full_width" placeholder="Your Address"></Input>
                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/phone")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>


            </Form>


        </div>

    )
}





export default App