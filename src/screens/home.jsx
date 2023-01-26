
// import { ChatGPTAPIBrowser } from 'chatgpt'
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
import { useDispatch, useSelector } from "react-redux"
import { set_name, set_email, set_intro , set_address , set_phone} from "../store/counterslice"


const App = () => {


    const dispatch = useDispatch()

    // const api = new ChatGPTAPIBrowser({
    //     email: process.env.OPENAI_EMAIL,
    //     password: process.env.OPENAI_PASSWORD
    // })


    // const chat = async () => {

    //     await api.initSession()

    //     const result = await api.sendMessage('Hello World!')
    //     console.log(result.response)
    // }



    const navigate = useNavigate()

    const [name, setName] = useState('')

    
    const container = useRef(null)

    useEffect(() => {

        function updateScreen(time) {

            alanBtn({

                key: "e8fa9817b3cb393fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

                onCommand: (commandData) => {

                    if (commandData.command === "home") {


                        
                        navigate("/web")

                    }

                    if (commandData.command === "name") {


                        dispatch(set_name(commandData.data))
                        navigate("/about")

                    }

                    if (commandData.command === "intro") {

                        console.log(commandData.data)
                        dispatch(set_intro(commandData.data))
                        navigate("/email")

                    }

                    if (commandData.command === "email") {


                        dispatch(set_email(commandData.data))
                        navigate("/phone")

                    }

                    if (commandData.command === "phone") {


                        dispatch(set_phone(commandData.data))
                        navigate("/address")

                    }

                    if (commandData.command === "address") {


                        dispatch(set_address(commandData.data))
                        navigate("/skills")

                    }


                }
            })
        }


        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/search.json")
        });


        requestAnimationFrame(updateScreen);
    }, [])


    const state = useSelector(state => state.counter)

    console.log(state.basic)

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

    var regName = /^[a-zA-Z ]+$/;

    return (

        <div className="home_base">


            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/about") }}>
                <FormGroup className="full_width">
                    <Input required onChange={(e) => setName(e.target.value)} valid={regName.test(name)} invalid={name != "" && !regName.test(name)} bsSize="lg" className="full_width" placeholder="Your Name"></Input>

                    <FormFeedback invalid >
                        Only alphabets allowed
                    </FormFeedback>



                </FormGroup>
                <Button size="lg" type="submit" color="success" className="full_width">Next</Button>
                {/* <Button size="lg" onClick={() => chat()} color="success" className="full_width">CHAT</Button> */}


            </Form>

            {/* <Button color="success" onClick={() => get_noti()}>Test Notification</Button> */}
        </div>

    )
}





export default App