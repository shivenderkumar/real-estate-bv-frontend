import React, { useEffect, useState } from "react"
import "../../../styles/CatalogListItemComp.css"
import {Pencil, Eye,Images} from "react-bootstrap-icons"

export default function CatalogListItemComp({ obj }) {
    const [image_url, setImage_url] = useState("");
    useEffect(()=>{
        setImage_url(obj.image_url);
    },[])
    return (<>
        <div className="row-header-item">{obj.ppd_id}</div>
        <div className="row-header-item"><Images/></div>
        <div className="row-header-item">{obj.property}</div>
        <div className="row-header-item">{obj.contact}</div>
        <div className="row-header-item">{obj.area}</div>
        <div className="row-header-item">{obj.views}</div>
        <div className="row-header-item">{obj.status}</div>
        <div className="row-header-item">{obj.days_left}</div>
        <div className="row-header-item"><Eye style={{"float":"left","width":"50%","height":"60%","marginTop":"5px"}}/><span> </span><Pencil style={{"float":"right","width":"50%","height":"60%","marginTop":"5px"}}/></div>
    </>)

}
