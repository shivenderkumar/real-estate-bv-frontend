import React from "react"
import "../../styles/DropDownComp.css"

export default function DropDownComp({type,lable}){

    return(<>
    <div className="DropDownComp-container">
        <div className="lable-container">
            <lable for={lable}>{lable}</lable>
        </div>
        <div className="input-container">
        <input type={type} placeholder={`Enter ${lable}`}/>
        </div>
    </div>
    </>)
}