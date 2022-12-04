import React, { useEffect, useState } from "react"
import "../../../styles/InputComp.css"

export default function InputComp({input, onInputValChange}){
    const [ip, setInput] = useState(input);

    useEffect(()=>{
        onInputValChange(ip);
    },[ip]);

    return(<>
    <div className="InputComp-container">
        <div className="lable-container">
            <lable for={ip.key}>{ip.lable}</lable>
        </div>
        <div className="input-container">
        <input type={ip.type} placeholder={ip.placeholder} value={input.value} onChange={(e)=>{
            setInput(ip =>{
                let newData = {
                    ...ip,
                    value: e.target.value
                }
                return newData
            })
        }} />
        </div>
    </div>
    </>)
}