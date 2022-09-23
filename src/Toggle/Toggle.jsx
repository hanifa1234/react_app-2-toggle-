import React from 'react'
import { useState } from 'react';

const Toggle = () => {

    const [Toggle, setToggle] = useState(true);

    return (
        <div style={{
            margin: " 1rem"
            , backgroundColor: "pink",
            padding: "2rem"
        }}>
            <div >
               { Toggle && (
                <p>Tempor vero et duo est accusam gubergren diam sed accusam. Elitr est aliquyam est elitr consetetur clita. Sed elitr consetetur.</p>
               )}
            </div>


            <div style={{ textAlign: "center" }} >
                <button onClick={()=>{
                    setToggle(!Toggle)
                }} > 
                {
                    setToggle( Toggle? "Hide": "Show")
                } 
                </button>
            </div>
        </div>
    )
}

export default Toggle;