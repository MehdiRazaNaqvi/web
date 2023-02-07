
// import { ChatGPTAPIBrowser } from 'chatgpt'
import alanBtn from "@alan-ai/alan-sdk-web"

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import { generateToken } from "../firebase-config"
import axios from "axios"
import { toast } from "react-toastify"
import addNotification from "react-push-notification"


import lottie from "lottie-web"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { set_name, set_email, set_intro, set_address, set_phone, set_skills, click_image } from "../store/counterslice"
import { api_url } from "../config"
// const { Configuration, OpenAIApi } = require("openai");
import OneSignal from 'react-onesignal';
import Navbar from "../components/navbar"


import Download from "../screens/download"
const App = () => {




    const dispatch = useDispatch()




    const navigate = useNavigate()

    const [name, setName] = useState('')


    const container = useRef(null)

    const customInput = new SpeechSynthesisUtterance()

    const state = useSelector(state => state.counter)


    useEffect(() => {


        OneSignal.init({ appId: '8648d2ff-e088-420e-854b-6c59e4321f28' })
            .then(() => { console.log("initialized"); send_noti() })



        setName(state.basic.name)



        function updateScreen(time) {

            alanBtn({

                key: "e8fa9817b3cb393fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

                onCommand: (commandData) => {

                    if (commandData.command === "home") {

                        navigate("/web")

                    }

                    else if (commandData.command === "name") {

                        dispatch(set_name(commandData.data))
                        navigate("/about")

                    }

                    else if (commandData.command === "intro") {

                        console.log(commandData.data)
                        dispatch(set_intro(commandData.data))
                        navigate("/email")

                    }

                    else if (commandData.command === "email") {


                        dispatch(set_email(commandData.data))
                        navigate("/phone")

                    }

                    else if (commandData.command === "phone") {


                        dispatch(set_phone(commandData.data))
                        navigate("/address")

                    }

                    else if (commandData.command === "address") {


                        dispatch(set_address(commandData.data))
                        navigate("/skills")

                    }
                    else if (commandData.command === "skills") {

                        navigate("/basicInfo")

                        chatGpt(commandData.data, (res) => { dispatch(set_skills(res)) })

                    }

                    // else if (commandData.command === "photo") {

                    //     dispatch(click_image())
                    //     state.set_click()
                    // }


                    // else if (commandData.command === "skip") {

                    //     navigate("/basicInfo")

                    // }



                    else if (commandData.command === "fallback") {


                        // setCustomInput(commandData.data)
                        // chatGpt(commandData.data)
                        console.log("fallback")

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


    // useEffect(() => {

    //     const msg = new SpeechSynthesisUtterance()

    //     msg.text = "Welcome to our application you can start the communication by pressing the button at bottom right of your screen"

    //     window.speechSynthesis.speak(msg)

    // }, [])





    console.log(state.basic)

    // const getFcm = async () => {

    //     const fcmtoken = await generateToken()


    //     if (fcmtoken) {
    //         console.log(fcmtoken)

    //         // axios.post('http://localhost:5000/fcm/getFCM', {
    //         axios.post('https://web-production-3465.up.railway.app/fcm/getFCM', {

    //             token: fcmtoken



    //         })

    //             .then(d => console.log(d))
    //             .catch(err => console.log(err))

    //     }


    //     else {
    //         toast.error("Please Allow Notification")
    //     }
    // }




    const validateEmail = (email) => {

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );


    };



    const chatGpt = async (text, cb) => {

        axios.post(`${api_url}/openAi/getans`, { text: text })
            .then(res => cb(res.data.msg))

    }


    const send_noti = () => {

        OneSignal.sendTag("tech", "tag")
            .then(() => console.log("Tagged"))

    }


    var regName = /^[a-zA-Z ]+$/;


    return (

        <div className="home_base">


            <Navbar name="Profile" />

            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/about"); dispatch(set_name(name)) }}>
                <FormGroup className="full_width">
                    <Input defaultValue={state.basic?.name} required onChange={(e) => setName(e.target.value)} valid={regName.test(name)} invalid={name != "" ? regName.test(name) ? false : true : false} bsSize="lg" className="full_width" placeholder="Your Name"></Input>

                    <FormFeedback invalid >
                        Only alphabets allowed
                    </FormFeedback>



                </FormGroup>
                <Button disabled={!regName.test(name)} size="lg" type="submit" color="success" className="full_width">Next</Button>
                {/* <Button size="lg" onClick={() => chatGpt("Hi I am a swimmer and a part time programmer", (res) => { console.log(res) })} type="button" color="success" className="full_width">chat</Button> */}



            </Form>

            {/* <Button color="success" onClick={() => get_noti()}>Test Notification</Button> */}




        </div>

    )
}





export default App