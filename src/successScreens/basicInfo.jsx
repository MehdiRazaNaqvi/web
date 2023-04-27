
// import { ChatGPTAPIBrowser } from 'chatgpt'


import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText, InputGroup, InputGroupText, } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { api_url } from "../config"


import { MdVerifiedUser, MdWorkOutline } from "react-icons/md"
import { CiLocationOn } from "react-icons/ci"
import { HiOutlineMail } from "react-icons/hi"
import { BiPhone } from "react-icons/bi"
import { BsPerson } from "react-icons/bs"


import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles,

} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



import { Document, Page } from 'react-pdf';
import { jsPDF } from "jspdf";

import html2canvas from 'html2canvas';
import Download from "../screens/download"


const { Configuration, OpenAIApi } = require("openai");







const App = (props) => {





    const dispatch = useDispatch()




    const navigate = useNavigate()

    const [name, setName] = useState('')


    const container = useRef(null)




    const state = useSelector(state => state.counter)


    let rows = state.basic.skills.split("\n|");
    // rows.pop(); // remove the last empty string

    let words = rows.map(row => row.replace("---|", "").replace("|", "", " - ").trim());






    const download = () => {


        const input = document.getElementById('d')


        html2canvas(input)
            .then(r => {
                const imgData = r.toDataURL('image/png')

                const pdf = new jsPDF()
                var width = pdf.internal.pageSize.getWidth()
                var height = pdf.internal.pageSize.getHeight()

                // var marginX = (pdf.internal.pageSize.getWidth()) / 10

                pdf.addImage(imgData, 'JPEG', 0, 0, width, height)

                pdf.save('resumee.pdf');




            })


            .catch(err => console.log(err))


    }


    

    return (

        <div className="home_base" id="d" >




            <div className="cover_animation" ref={container}></div>


            <span className="profile_preview_body">


                <span className="image_container">
                    {state.basic.image == "" ?
                        <BsPerson color="gray" size={100} />
                        :
                        <img src={`${api_url}/images/${state.basic.image}`} className="image_preview" />
                    }
                    {state.basic.image != "" && <MdVerifiedUser color="rgb(44, 68, 255)" size={30} className="verify_badge" />}
                </span>


                <Form style={{ gap: "1.5rem" }} className="width form" onSubmit={(e) => { e.preventDefault() }}>

                    <span className="name_preview">{state.basic.name}</span>


                    <span>{state.basic.skills}</span>
                    {/* 
                    <span className="preview_page_skills_div">


                        <CircularProgressbar circleRatio={1} styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            strokeLinecap: "butt",

                            textColor: "gray",
                            pathColor: "green",
                            trailColor: "lightgray"
                        })} className="round_progress_preview" strokeWidth={5} value={100} text={'Skills'} />





                        <CircularProgressbar styles={buildStyles({
                            textColor: "gray",
                            pathColor: "green",
                            trailColor: "lightgray"
                        })} className="round_progress_preview" strokeWidth={5} value={state.basic.image == "" ? -5 : 100} text={`Photo`} />

                        <CircularProgressbar styles={buildStyles({
                            textColor: "gray",
                            pathColor: "green",
                            trailColor: "lightgray"
                        })} className="round_progress_preview" strokeWidth={5} value={70} text={`Profile`} />


                    </span> */}


                    <InputGroup style={{ gap: "1rem" }}>

                        <HiOutlineMail color="lightgray" size={35} />
                        <Input placeholder="username" defaultValue={state.basic.email} disabled />
                    </InputGroup>

                    <InputGroup style={{ gap: "1rem" }}>

                        <BiPhone color="lightgray" size={35} />
                        <Input placeholder="username" defaultValue={state.basic.phone} disabled />
                    </InputGroup>

                    <InputGroup style={{ gap: "1rem" }}>

                        <CiLocationOn color="lightgray" size={35} />
                        <Input placeholder="username" defaultValue={state.basic.address} disabled />
                    </InputGroup>

                    <InputGroup style={{ gap: "1rem" }}>

                        <MdWorkOutline color="lightgray" size={35} />
                        <Input placeholder="username" defaultValue={state.basic.intro} disabled />
                    </InputGroup>





                    <Button size="lg" type="button" color="success" className="full_width"> <Download /> </Button>


                </Form>


            </span>



        </div>

    )
}





export default App