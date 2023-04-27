

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



import lottie from "lottie-web"
import { useSelector } from "react-redux"
import { useRef } from "react"
import { set_qualification } from "../store/counterslice"
import Navbar from "../components/navbar"
import { useDispatch } from "react-redux"


const App = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')

    const container = useRef(null)


    const state = useSelector(state => state.counter)
    const dispatch = useDispatch()

    useEffect(() => {


        setName(state.basic.intro)



        lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: require("../skins/degree.json")
        });



    }, [])







    console.log(state)

    



    return (

        <div className="home_base">

            <Navbar name="Qualification" name2="Experience" name3="Profile"/>

            <div className="animation" ref={container}></div>

            <Form className="width form" onSubmit={(e) => { e.preventDefault(); navigate("/experience"); dispatch(set_qualification(name)) }}>
                <FormGroup className="full_width">
                    <Input defaultValue={state.basic.intro} style={{ height: "4rem" }} type="textarea" required onChange={(e) => setName(e.target.value)} valid={name != ""} bsSize="lg" className="full_width" placeholder="Your Introduction"></Input>
                </FormGroup>

                <div className="btn_div">
                    <Button onClick={() => navigate("/skills")} size="lg" color="dark" className="half_width">Back</Button>

                    <Button disabled={name == ""} size="lg" type="submit" color="success" className="half_width">Next</Button>

                </div>


            </Form>


        </div>

    )
}





export default App