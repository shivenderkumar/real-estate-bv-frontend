import React, { useEffect } from "react";
import "../../../styles/Navbar.css";

export default function Navbar({ navNo }) {
    let liNames = ["1. Basic Info", "2. Property Details", "3. General Info", "4. Location Info"];

    useEffect(() => {
//        console.log("Rendering navbar...", navNo);
    }, [navNo]);

    return (<>
        <div className="list-container">
            <ul>
                {
                    liNames.map((item, index) => {
                        return (index == navNo) ? <li key={index} style={{ background: "blue", color: "white" }}>{item}</li> : <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>

    </>);
}