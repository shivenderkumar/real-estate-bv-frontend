import React from "react"
import { Link } from "react-router-dom"
import "../styles/SideBarComp.css"
import logo from "../images/img4.png";

import { House, Bell, Download, Upload, Eye, Tag } from "react-bootstrap-icons";

export const IconTxtSideBar = ({ text, children })=>{
    return (<>
        <span style={{ "margin": "10px 20px 10px 0" }}>
            {children}
        </span>{`${text}`}</>)
}

export default function Sidebar() {

    return (<>
        <div className="sidebar-container">
            <div className="sidebar-img-container">
                <img src={logo} />
            </div>
            <ol className="sidebar-ol">
                <li><Link to="/home" className="sidebar-link" >
                    <IconTxtSideBar text={"Property"}><House /></IconTxtSideBar></Link></li>

                <li><Link to="/home/assistance" className="sidebar-link">
                    <IconTxtSideBar text={"Assistance"}><Bell /></IconTxtSideBar></Link></li>
                <li><Link to="/home/receivedinterest" className="sidebar-link">
                    <IconTxtSideBar text={"Received Interest"}><Download /></IconTxtSideBar></Link></li>
                <li><Link to="/home/sentassistance" className="sidebar-link">
                    <IconTxtSideBar text={"Sent Interest"}><Upload /></IconTxtSideBar></Link></li>
                <li><Link to="/home/propertyviews" className="sidebar-link">
                    <IconTxtSideBar text={"Property Views"}><Eye /></IconTxtSideBar></Link></li>
                <li><Link to="/home/tariffplan" className="sidebar-link">
                    <IconTxtSideBar text={"Tariff Plan"}><Tag /></IconTxtSideBar></Link></li>
            </ol>
        </div>
    </>)

}