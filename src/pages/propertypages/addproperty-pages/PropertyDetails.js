import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import "../../../styles/PropertyDetails.css"
import { useAddPropertyContext } from "../contexts-providers/AddPropertyContextProvider";
import FormComp from "../form-utils/FormComp";

const PropertyDetails = forwardRef((props, saveRef) => {
    const {propertyData, setPropertyData} = useAddPropertyContext();

    const list = [
        {
            key:"length",
            type: "text",
            lable: "Length",
            placeholder: "eg.45",
            value: ""
        },
        {
            key:"breadth",
            type: "text",
            lable: "Breadth",
            placeholder: "eg.45",
            value: ""
        },
        {
            key:"total_area",
            type: "text",
            lable: "Total Area",
            placeholder: "eg.45",
            value: ""
        },
        {
            key:"area_unit",
            type: "text",
            lable: "Area Unit",
            placeholder: "eg.Metre Square",
            value: ""
        },
        {
            key:"no_of_bhk",
            type: "text",
            lable: "No of Bhk",
            placeholder: "eg.2Bhk",
            value: ""
        },
        {
            key:"no_of_floor",
            type: "text",
            lable: "No of Floor",
            placeholder: "eg.2",
            value: ""
        },
        {
            key:"attached",
            type: "text",
            lable: "Attached",
            placeholder: "Yes/No",
            value: ""
        },
        {
            key:"western_toilet",
            type: "text",
            lable: "Western Toilet",
            placeholder: "eg.Yes/No",
            value: ""
        },
        {
            key:"furnished",
            type: "text",
            lable: "Furnished",
            placeholder: "eg.Yes/No",
            value: ""
        },
        {
            key:"car_parking",
            type: "text",
            lable: "Car Parking",
            placeholder: "eg.Yes/No",
            value: ""
        },
        {
            key:"lift",
            type: "text",
            lable: "Lift",
            placeholder: "eg.Yes/No",
            value: ""
        },
        {
            key:"electricity",
            type: "text",
            lable: "Electricity",
            placeholder: "eg.Yes/No",
            value: ""
        },
        {
            key:"facing",
            type: "text",
            lable: "Facing",
            placeholder: "eg.East/West/North/South",
            value: ""
        }
    ]
    const [listIP, setListIP] = useState(list);
    const onChangeList = (ipList) => {
        setListIP(ipList)
    }

    useImperativeHandle(saveRef, () => ({
        saveIpListDatainContext() {
            // console.log("PropertyDetailsComp- saveIpListDatainContext called");
            let obj = {};
            listIP.forEach(ele=>{
                obj[ele.key] = ele.value
            })
            setPropertyData(obj)
        }
    }))

    useEffect(() => {
        console.log("PropertyDetailsComp- current context value :",propertyData);
    }, [listIP])

    useEffect(() => {
        console.log("PropertyDetailsComp- Rendering...")// :", propertyData);
        setListIP(data=>{
            let newData=[...listIP].map(ipObj=>{
                ipObj.value=propertyData[ipObj.key];
                return ipObj
            });
            return newData
        })
    }, [])

    return (<>
        <div className="propertyinfo-container">
            <FormComp listIP={list} onChangeList={onChangeList} />
        </div>
    </>)
})

export default PropertyDetails;