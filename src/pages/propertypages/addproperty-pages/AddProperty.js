import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import "../../../styles/AddProperty.css"
import Navbar from "./Navbar";
import BasicInfo from "./BasicInfo";
import GeneralInfo from "./GeneralInfo";
import PropertyDetails from "./PropertyDetails";
import LocationInfo from "./LocationInfo";
import AddPropertyContextProvider, { useAddPropertyContext } from "../contexts-providers/AddPropertyContextProvider";
import { addPropertyApi } from "../../../api-utils/Api";
import Button from "react-bootstrap/Button"

export default function AddProperty() {
    const saveRef = useRef();
    const navigate = useNavigate();
    const { propertyData, allDataFilled } = useAddPropertyContext();
    const [readyToLoad, setReadyToLoad] = useState(false);

    const [navNo, setNavNo] = useState(0);
    const [cancelBtnName, setCancelBtnName] = useState("Cancel")

    function onCancelClickHandler() {
        if (cancelBtnName == "Cancel") {
            navigate("/home");
        }
        else {
            setNavNo(navNo => {
                let newVal = navNo - 1;
                return newVal;
            });
        }
    }

    useEffect(() => {
        if (navNo > 0 && navNo < 4) {
            setCancelBtnName("Previous");
        }
        else {
            setCancelBtnName("Cancel")
        }
    }, [navNo]);

    function onSaveContinueClickHandler() {
        //send signal to curr child comp to save list in context data
        saveRef.current.saveIpListDatainContext();
        //navigate to next page
        setNavNo(navNo => {
            let newVal = navNo + 1; //(navNo + 1) % 4;
            if (newVal > 3) { newVal -= 1 }
            return newVal;
        });
    }

    function onAddPropertyClickHandler() {
        saveRef.current.saveIpListDatainContext();
        setReadyToLoad(allDataFilled);
    }


    useEffect(() => {
        if (allDataFilled) {
            addPropertyApi(propertyData)
            .then(res=>{
                console.log("AppPropertyComp- Api response: ",res);
                if(res.status == "success"){
                    navigate("/home");
                }
            })
            .catch(err=>{
                console.log("AppPropertyComp- Api response Err: ",err.message);
            })
            console.log("HO gya navigate ab mat la response promise bsdk");
        }
        else {
            console.log("AppPropertyComp- Not ready to load data: ",propertyData,allDataFilled);
        }
    }, [readyToLoad,allDataFilled]);

    return (
        <>
            <div className="addProperty-container">
                <div className="navbar-container">
                    <Navbar navNo={navNo} />
                </div>
                
                <div className="form-container">
                    {(navNo == 0) && <BasicInfo ref={saveRef} />}
                    {(navNo == 1) && <PropertyDetails ref={saveRef} />}
                    {(navNo == 2) && <GeneralInfo ref={saveRef} />}
                    {(navNo >= 3) && <LocationInfo ref={saveRef} />}
                </div>
                <div className="cancelPrevSaveBtn-container">
                    <div className="btn-center-container">
                    <Button variant="primary" onClick={onCancelClickHandler}>{cancelBtnName}</Button>
                        {
                            (navNo < 3) ? <Button variant="primary" onClick={onSaveContinueClickHandler}>Save & Continue</Button>
                                : <Button variant="primary" onClick={onAddPropertyClickHandler}>Add Property</Button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}