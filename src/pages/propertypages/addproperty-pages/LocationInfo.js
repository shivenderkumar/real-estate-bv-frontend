import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { useNavigate } from "react-router-dom";
import "../../../styles/LocationInfo.css"
import { useAddPropertyContext } from "../contexts-providers/AddPropertyContextProvider";
import FormComp from "../form-utils/FormComp";

const LocationInfo = forwardRef((props,saveRef)=>{
    const {propertyData, setPropertyData, allDataFilled} = useAddPropertyContext();

    const list = [
        {
            key:"email",
            type: "text",
            lable: "Email",
            placeholder: "eg.xyz@gmail.com",
            value: ""
        },
        {
            key:"city",
            type: "text",
            lable: "City",
            placeholder: "Enter city here...",
            value: ""
        },
        {
            key:"area",
            type: "text",
            lable: "Area",
            placeholder: "Enter Area here...",
            value: ""
        },
        {
            key:"pincode",
            type: "text",
            lable: "Pincode",
            placeholder: "eg.110088",
            value: ""
        },
        {
            key:"address",
            type: "text",
            lable: "Address",
            placeholder: "Enter Address here...",
            value: ""
        },
        {
            key:"landmark",
            type: "text",
            lable: "Landmark",
            placeholder: "Enter Landmark here...",
            value: ""
        },
        {
            key:"latitude",
            type: "text",
            lable: "Latitude",
            placeholder: "eg.2101254512",
            value: ""
        },
        {
            key:"longitude",
            type: "text",
            lable: "Longitude",
            placeholder: "eg.2101254512",
            value: ""
        }
    ]
    const [listIP, setListIP] = useState(list);
    const onChangeList = (ipList) => {
        setListIP(ipList)
    }

    useImperativeHandle(saveRef, () => ({
        saveIpListDatainContext() {
            // console.log("LocationInfoComp- saveIpListDatainContext called");
            let obj = {};
            listIP.forEach(ele=>{
                obj[ele.key] = ele.value
            })
            setPropertyData(obj);
            console.log("LocationInfoComp- current context value :",propertyData);
        }
    }))

    useEffect(() => {
//        console.log("LocationInfoComp- current context value :",propertyData);
    }, [listIP])

    useEffect(() => {
//        console.log("LocationInfoComp- Rendering...")// :", propertyData);
        setListIP(data=>{
            let newData=[...listIP].map(ipObj=>{
                ipObj.value=propertyData[ipObj.key];
                return ipObj
            });
            return newData
        })
    }, [])    

    return(<>
    <div className="locationinfo-container">
        <FormComp listIP={list} onChangeList={onChangeList} />
    </div>
    </>)
})


export default LocationInfo;