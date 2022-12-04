import React, { useEffect } from "react";
import "../styles/HomePage.css";

import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Catalog from "./propertypages/Catalog"
import AddProperty from './propertypages/addproperty-pages/AddProperty';
import Assistance from "./assistance/Assistance";
import ReceivedIntrst from "./receivedinterest/ReceivedIntrst";
import SentIntrst from "./sentassistance/SentIntrst";
import PropertyViews from "./propertyviews/PropertyViews";
import TariffPlan from "./tariffplan/TariffPlan";
import Sidebar from './SideBarComp';
import HeaderComp from "./HeaderComp"
import { validateToken } from "../api-utils/Api";

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(()=>{
    let token = localStorage.getItem("MYJWT");
    console.log("MYJWT before home comp: ", token);

    try {
      validateToken(token).then(res => {
        if(res == "login"){
          navigate("/login")
        }
        else if(res == "home"){
          navigate("/home")
        }
      });
    } catch (err) {
      console.log("error : ", err);
    }
    console.log("Rendering Home Comp");
  },[])

    return (<>
        <div className="homepage-container">
        <div className='left'>
          <Sidebar />
        </div>
        <div className='right'>
          <div className='right-header'>
            <HeaderComp />
          </div>
          <div className='right-displayoutlet'>
            <Outlet />
          </div>
        </div>
        </div>
    </>)
}