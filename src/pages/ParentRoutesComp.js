import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

import Catalog from "./propertypages/Catalog"
import AddProperty from './propertypages/addproperty-pages/AddProperty';
import Assistance from "./assistance/Assistance";
import ReceivedIntrst from "./receivedinterest/ReceivedIntrst";
import SentIntrst from "./sentassistance/SentIntrst";
import PropertyViews from "./propertyviews/PropertyViews";
import TariffPlan from "./tariffplan/TariffPlan";
import Login from "./login-signup/Login";
import SignUp from "./login-signup/SignUp";
import HomePage from "./HomePage";
import { useEffect } from "react";
import AddPropertyContextProvider from "./propertypages/contexts-providers/AddPropertyContextProvider";

export default function ParentRouteComp({ page }) {
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Rendering ParentRoutes Comp");
        if (page == "login") {
            navigate("login")
        }
        else if (page == "home") {
            navigate("home")
        }
    }, [])
    return (<>
        {
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />

                <Route path="home" element={<HomePage />}>
                    <Route index='catalog' element={<Catalog />} />
                    <Route path='add' element={
                        <AddPropertyContextProvider>
                            <AddProperty />
                        </AddPropertyContextProvider>}
                    />
                    <Route path='assistance' element={<Assistance />} />
                    <Route path='receivedinterest' element={<ReceivedIntrst />} />
                    <Route path='sentassistance' element={<SentIntrst />} />
                    <Route path='propertyviews' element={<PropertyViews />} />
                    <Route path='tariffplan' element={<TariffPlan />} />
                </Route>
            </Routes>
        }
    </>)
}