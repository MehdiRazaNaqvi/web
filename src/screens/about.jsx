

import alanBtn from "@alan-ai/alan-sdk-web"

import { useEffect } from "react"
import "../style/home.css"

import { Input } from "reactstrap"
import { useState } from "react"




const App = () => {



    const [name, setName] = useState('')

    useEffect(() => {

        function updateScreen(time) {

            alanBtn({

                key: "c6eb400ab872978fad3b004399eccbd82e956eca572e1d8b807a3e2338fdd0dc/stage",

                onCommand: (commandData) => {

                    if (commandData.command === "hello") {

                        console.log(commandData.data)
                        setName(commandData.data)
                    }






                }
            })
        }


        requestAnimationFrame(updateScreen);
    }, [])


    return (
        <div className="home_base">
            ABOUT
            <Input value={name} style={{ width: "50%" }} placeholder="Your Name"></Input>
        </div>

    )
}





export default App