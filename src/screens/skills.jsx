

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


import lottie from "lottie-web"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import axios from "axios"
import { api_url } from "../config"



import Navbar from "../components/navbar"
import { set_skills } from "../store/counterslice"

const App = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState('')
    const [skillName, setSkillname] = useState("")
    const container = useRef(null)

    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)


    useEffect(() => {

        setSkillname(state.basic.skills)


        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/skills.json")
        });


    }, [])






    const chatGpt = async (text, cb) => {

        axios.post(`${api_url}/openAi/getans`, { text: text, key: "skills" })
            .then(res => cb(res.data.msg))



    }




    return (

        <div className="home_base">
            <Navbar name="Profile" />

            <div className="animation" ref={container}></div>





            <Form className="width form" onSubmit={(e) => {

                e.preventDefault();
                navigate("/qualification");
                // chatGpt(skillName, (res) => { setLoading(false); dispatch(set_skills(res)) })
                dispatch(set_skills(skillName))

            }}>

                {/* <FormGroup className="full_width gap">

                    <Input defaultValue={state.basic.skills} value={skillName.name} onChange={(e) => setSkillname({ ...skillName, name: e.target.value })} bsSize="lg" className="full_width" placeholder="HTML"></Input>

                    <span style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <Rating
                        color="red"

                            
                            showTooltip={false}
                            size={30}
                            tooltipArray={["Just begginer at it", "little experience at it", "Mid level at it", "Have quite an experience", "Expert"]}
                            tooltipClassName="rating-tooltip"
                            onClick={(r) => setSkillname({ ...skillName, score: r })}

                            initialValue={skillName.score}
                        
                        />
                        <Button color="warning" onClick={() => { setSkills([...skills, { name: skillName.name, score: skillName.score }]); setSkillname({ name: "", score: 0 }) }}>Add</Button>

                    </span>

                </FormGroup> */}

                <FormGroup className="full_width gap">

                    <Input type="textarea" style={{ height: "4rem" }} defaultValue={state.basic.skills} onChange={(e) => setSkillname(e.target.value)} bsSize="lg" className="full_width" placeholder="I am a web developer. I develop full stack applications. I am also quite good in cycling"></Input>

                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/address")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button disabled={skillName == "" || loading} size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>



            </Form>


        </div>

    )
}





export default App