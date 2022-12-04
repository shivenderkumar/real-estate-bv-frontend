import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/HeaderComp.css";
import { Person } from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown"

export default function HeaderComp() {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("MYJWT");
        navigate("/login")
    }

    return (<>
        <div className="headercomp-container" >
            <div className="userid-container">
                <span>USER ID : 06PPD125</span>
            </div>
            <div className="usermenu-container">
                <div className="usermenu-text">
                    <span style={{ "margin": "10px" }}><Person /></span>User name {'\u00A0'}
                </div>
                <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">

                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    </>)
}