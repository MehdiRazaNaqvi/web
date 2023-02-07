

import alanBtn from "@alan-ai/alan-sdk-web"

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


import addNotification from "react-push-notification"


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
            animationData: require("../skins/email.json")
        });


        // requestAnimationFrame(updateScreen);
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

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/phone"); set_email(name) }}>

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

            {/* <Button color="success" onClick={() => get_noti()}>Test Notification</Button> */}
        </div>

    )
}





export default App