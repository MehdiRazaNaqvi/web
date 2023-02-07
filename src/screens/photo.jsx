

import alanBtn from "@alan-ai/alan-sdk-web"

import { useEffect } from "react"
import "../style/home.css"

import { Button, Input, Form, FormFeedback, FormGroup, FormText } from "reactstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import axios from "axios"
import { toast } from "react-toastify"
import addNotification from "react-push-notification"


import lottie from "lottie-web"
import { useRef } from "react"
import { Camera } from "react-camera-pro";
import { useDispatch, useSelector } from "react-redux"
import { api_url } from "../config"
import { Buffer } from 'buffer';
import { TbCapture, TbCaptureOff } from "react-icons/tb"
import Navbar from "../components/navbar"

import { set_image, click_image, set_click } from "../store/counterslice"
Buffer.from('anything', 'base64');





const App = () => {


    const dispatch = useDispatch()


    const navigate = useNavigate()


    const camera = useRef(null);

    const [image, setImage] = useState(null);




    const state = useSelector(state => state.counter)




    console.log(image)

    const uploadMediaByDisabled = () => {


        console.log("uploading")
        setImage(camera.current.takePhoto())




        const decodedImage = Buffer.from(
            image.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
        );


        const blob = new Blob([decodedImage], {
            type: 'image/jpeg'
        });


        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');



        console.log("UPLOADING")

        // fetch(`${api_url}/media/uploadFile`, {

        //     method: 'POST',
        //     // headers: headers,
        //     body: formData

        // })


        //     .then((d) => d.json())
        //     .then((res) => { res.data && dispatch(set_image(res.data)); navigate("/basicInfo") })


        //     .catch(err => console.log(err))



    }





    const uploadMedia = () => {





        const decodedImage = Buffer.from(
            image.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
        );


        const blob = new Blob([decodedImage], {
            type: 'image/jpeg'
        });


        const formData = new FormData();
        formData.append('file', blob, 'image.jpg');



        console.log("UPLOADING")

        // fetch(`${api_url}/media/uploadFile`, {

        //     method: 'POST',
        //     // headers: headers,
        //     body: formData

        // })


        //     .then((d) => d.json())
        //     .then((res) => { res.data && dispatch(set_image(res.data)); navigate("/basicInfo") })


        //     .catch(err => console.log(err))



    }







    return (

        <div className="home_base" >

            <Navbar name="Profile" />


            {state.basic.image_clicked ?

                <img className="image_taken" src={image} alt='Taken photo' />
                :
                <Camera aspectRatio={30 / 41} ref={camera} />

            }


            <Form className="width form" onSubmit={(e) => { e.preventDefault(); uploadMedia() }}>

                <FormGroup style={{ "marginTop": "2rem" }} className="full_width">
                    {!state.basic.image_clicked ?
                        <Button onClick={() => { setImage(camera.current.takePhoto()); dispatch(click_image()) }} size="lg" type="button" color="success" className="full_width"> <TbCapture style={{ marginRight: "0.5rem" }} size={25} /> Snap</Button>
                        :
                        <Button onClick={() => { setImage(null); dispatch(click_image()) }} size="lg" type="button" color="success" className="full_width"> <TbCaptureOff size={25} style={{ marginRight: "0.5rem" }} />Re Take</Button>
                    }
                </FormGroup>

                {state.basic.image_clicked ?
                    <div className="btn_div">
                        <Button onClick={() => navigate("/skills")} size="lg" color="dark" className="half_width"> Back</Button>

                        <Button size="lg" type="submit" color="success" className="half_width">Next</Button>
                    </div>

                    :

                    <div className="btn_div">
                        <Button onClick={() => navigate("/skills")} size="lg" color="dark" className="half_width"> Back</Button>

                        <Button size="lg" type="submit" color="success" className="half_width">Skip</Button>
                    </div>

                }
            </Form>


        </div>

    )
}





export default App