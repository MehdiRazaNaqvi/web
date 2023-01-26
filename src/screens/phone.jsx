

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
            animationData: require("../skins/phone.json")
        });


        // requestAnimationFrame(updateScreen);
    }, [])



    const getFcm = async () => {

        const fcmtoken = await generateToken()


        if (fcmtoken) {
            console.log(fcmtoken)

            // axios.post('http://localhost:5000/fcm/getFCM', {
            axios.post('https://web-production-3465.up.railway.app/fcm/getFCM', {

                token: fcmtoken



            })

                .then(d => console.log(d))
                .catch(err => console.log(err))

        }


        else {
            toast.error("Please Allow Notification")
        }
    }


    const get_noti = () => {

        addNotification({
            title: "Humai hai apka khayal 😍",
            message: "abhi join kren aur payen 10% cashback 🕶",
            duration: 4000,
            native: true,
            icon: Logo
        })
    }



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

            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/address") }}>

                <FormGroup className="full_width">
                    <Input required type="number" onChange={(e) => setName(e.target.value)} bsSize="lg" className="full_width" placeholder="Your Phone"></Input>

                    <FormFeedback invalid >
                        Please enter valid email
                    </FormFeedback>



                </FormGroup>


                <div className="btn_div">
                    <Button onClick={() => navigate("/email")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>

            </Form>

        </div>

    )
}





export default App