

import alanBtn from "@alan-ai/alan-sdk-web"
import { Rating } from 'react-simple-star-rating'
import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


import lottie from "lottie-web"
import { useRef } from "react"


import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const App = () => {

    const navigate = useNavigate()

    const [skills, setSkills] = useState([])
    const [submit, setSubmit] = useState('')
    const [skillName, setSkillname] = useState({ name: "", score: 0 })
    const container = useRef(null)




    // useEffect(() => {

    //     // function updateScreen(time) {

    //     //     alanBtn({

    //     //         key: "e8fa9817b3cb393fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

    //     //         onCommand: (commandData) => {

    //     //             if (commandData.command === "name") {

    //     //                 console.log(commandData.data)
    //     //                 setName(commandData.data)
    //     //                 navigate("/about")

    //     //             }


    //     //         }
    //     //     })
    //     // }


    //     lottie.loadAnimation({
    //         container: container.current,
    //         renderer: "svg",
    //         loop: true,
    //         autoplay: true,
    //         animationData: require("../skins/skills.json")
    //     });


    //     // requestAnimationFrame(updateScreen);
    // }, [])







    return (

        <div className="home_base">

            {/* <div className="animation" ref={container}></div> */}


            <span className="skills_grid">

                {skills.map((v, i) =>
                    <span key={i} className="progress_circle">
                        <CircularProgressbar size="sm" value={v.score * 20} text={v.name} />
                    </span>

                )}

            </span>



            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/photo") }}>

                <FormGroup className="full_width gap">

                    <Input value={skillName.name} onChange={(e) => setSkillname({ ...skillName, name: e.target.value })} bsSize="lg" className="full_width" placeholder="HTML"></Input>

                    <span style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                        <Rating
                        color="red"

                            // fillColorArray={["red", "green" , "orange" , "pink"]}
                            showTooltip={false}
                            size={30}
                            tooltipArray={["Just begginer at it", "little experience at it", "Mid level at it", "Have quite an experience", "Expert"]}
                            tooltipClassName="rating-tooltip"
                            onClick={(r) => setSkillname({ ...skillName, score: r })}

                            initialValue={skillName.score}
                        // onPointerEnter={onPointerEnter}
                        // onPointerLeave={onPointerLeave}
                        // onPointerMove={onPointerMove}
                        /* Available Props */
                        />
                        <Button color="warning" onClick={() => { setSkills([...skills, { name: skillName.name, score: skillName.score }]); setSkillname({ name: "", score: 0 }) }}>Add</Button>

                    </span>

                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/address")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button size="lg" type="submit" color="success" className="half_width">Next</Button>
                </div>



            </Form>

        </div>

    )
}





export default App