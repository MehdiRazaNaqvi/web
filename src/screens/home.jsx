
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
import { add_research, ResearchTitle, ResearchYear, add_open, add_speciality, ExpTitle, ExpYear, QualTitle, set_name, set_email, set_intro, set_address, set_phone, set_skills, click_image, add_qualification, add_experience, QualYear } from "../store/counterslice"
import { api_url } from "../config"
// const { Configuration, OpenAIApi } = require("openai");
import OneSignal from 'react-onesignal';
import Navbar from "../components/navbar"



const App = () => {




    const dispatch = useDispatch()




    const navigate = useNavigate()

    const [name, setName] = useState('')


    const container = useRef(null)


    const state = useSelector(state => state.counter)





    const saveRecord = () => {

        axios.post(`${api_url}/`, state)
            .then(res => toast.success("Record Saved"))
            .catch(err => toast.error("Network Error"))

    }



    const askIntro = () => {

        alanBtnInstance.playText(`Can you share your small introduction?`)
        alanBtnInstance.callProjectApi("intro");

    }



    console.log(state)


    const alanBtnInstance = alanBtn({

        key: "e8fa9817b3cb393fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

        onCommand: (commandData) => {

            if (commandData.command === "home") {

                navigate("/web")

            }

            else if (commandData.command === "name") {

                dispatch(set_name(commandData.data))
                // console.log(commandData.data)
                navigate("/email")
                // alanBtnInstance.playText(`Okay Can you confirm your name is ${commandData.data}`)
                // alanBtnInstance.playText(`You have a good name ${commandData.data}`)
                // alanBtnInstance.playText(`Can we proceed forward?`)
                // alanBtnInstance.callProjectApi("forward", {}, (res) => { console.log(res) });

                // askIntro()


            }

            else if (commandData.command === "intro") {

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
                navigate("/qualification")

            }

            else if (commandData.command === "skills") {

                navigate("/qualification")

                chatGpt(commandData.data, "skills", (res) => { dispatch(set_skills(res)) })

            }


            else if (commandData.command === "newQualification") {


                dispatch(QualTitle(commandData.data))

            }

            else if (commandData.command === "QualYear") {


                dispatch(QualYear(commandData.year))


            }

            else if (commandData.command === "QualInstitute") {


                // chatGpt(commandData.data, "qualification", (res) => { dispatch(add_qualification(qualification)) })
                dispatch(add_qualification(commandData.institute))

            }


            else if (commandData.command === "qualification") {
                navigate("/experience")

            }


            else if (commandData.command === "newExperience") {


                dispatch(ExpTitle(commandData.data))

            }


            else if (commandData.command === "ExpYear") {


                dispatch(ExpYear(commandData.year))


            }

            else if (commandData.command === "ExpInstitute") {


                // chatGpt(commandData.data, "qualification", (res) => { dispatch(add_qualification(qualification)) })
                dispatch(add_experience(commandData.institute))

            }



            else if (commandData.command === "experience") {
                // alert("completed")
                navigate("/research")


            }





            else if (commandData.command === "newResearch") {


                dispatch(ResearchTitle(commandData.data))

            }


            else if (commandData.command === "ResearchYear") {


                dispatch(ResearchYear(commandData.year))


            }

            else if (commandData.command === "ResearchInstitute") {


                // chatGpt(commandData.data, "qualification", (res) => { dispatch(add_qualification(qualification)) })
                dispatch(add_research(commandData.institute))

            }



            else if (commandData.command === "research") {
                // alert("completed")
                navigate("/speciality")


            }






            else if (commandData.command === "speciality") {
                // alert("completed")
                dispatch(add_speciality(commandData.data))


            }








            else if (commandData.command === "opportunity") {
                // alert("completed")
                navigate("/basicInfo")

                dispatch(add_open(commandData.data))
                saveRecord()


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

    useEffect(() => {



        // dispatch(emptyStore())


        setName(state.basic.name)

        // alanBtnInstance.activate();

        // function updateScreen(time) {

        // const alanBtnInstance = alanBtn({

        //     key: "e8fa9817b3cb393fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

        //     onCommand: (commandData) => {

        //         if (commandData.command === "home") {

        //             navigate("/web")

        //         }

        //         else if (commandData.command === "name") {

        //             dispatch(set_name(commandData.data))
        //             navigate("/about")

        //         }

        //         else if (commandData.command === "intro") {

        //             console.log(commandData.data)
        //             dispatch(set_intro(commandData.data))
        //             navigate("/email")

        //         }

        //         else if (commandData.command === "email") {


        //             dispatch(set_email(commandData.data))
        //             navigate("/phone")

        //         }

        //         else if (commandData.command === "phone") {


        //             dispatch(set_phone(commandData.data))
        //             navigate("/address")

        //         }

        //         else if (commandData.command === "address") {


        //             dispatch(set_address(commandData.data))
        //             navigate("/skills")

        //         }

        //         else if (commandData.command === "skills") {

        //             navigate("/qualification")

        //             chatGpt(commandData.data, "skills", (res) => { dispatch(set_skills(res)) })

        //         }


        //         else if (commandData.command === "newQualification") {


        //             chatGpt(commandData.data, "qualification", (res) => { dispatch(add_qualification(res)) })

        //         }


        //         else if (commandData.command === "qualification") {
        //             navigate("/experience")

        //         }


        //         else if (commandData.command === "newExperience") {


        //             chatGpt(commandData.data, "experience", (res) => { dispatch(add_experience(res)) })

        //         }


        //         else if (commandData.command === "experience") {
        //             // alert("completed")
        //             navigate("/basicInfo")
        //             saveRecord()


        //         }



        //         // else if (commandData.command === "photo") {

        //         //     dispatch(click_image())
        //         //     state.set_click()
        //         // }


        //         // else if (commandData.command === "skip") {

        //         //     navigate("/basicInfo")

        //         // }



        //         else if (commandData.command === "fallback") {


        //             // setCustomInput(commandData.data)
        //             // chatGpt(commandData.data)
        //             console.log("fallback")

        //         }



        //     }
        // })
        // }



        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/search.json")
        });


        // requestAnimationFrame(updateScreen);





    }, [])



    const speak = () => {

        // alanBtnInstance.playText("tell name");
        // alanBtnInstance.sendText("Hello, Alan, can you help me?");
        // alanBtnInstance.playCommand({command:"askName", screen: "settings"});
        // alanBtnInstance.playCommand('test');


        // alanBtnInstance.activate();
        // alanBtnInstance.playText("(Hi|Hi there|Hello), I am your resume maker. May I know your name please?");

        // alanBtnInstance.callProjectApi("forward");



    }









    const chatGpt = async (text, key, cb) => {

        axios.post(`${api_url}/openAi/getans`, { text: text, key })
            .then(res => cb(res.data.msg))
            .catch(err => { cb(text); toast.error("Network Eror") })

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

            {/* <button onClick={() => speak()}>speak</button> */}


        </div>

    )
}





export default App