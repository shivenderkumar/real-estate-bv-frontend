import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import "../../../styles/BasicInfo.css"
import { useAddPropertyContext } from "../contexts-providers/AddPropertyContextProvider"
import FormComp from "../form-utils/FormComp"

// export default function BasicInfo() {
const BasicInfo = forwardRef((props, saveRef)=>{
    const { propertyData, setPropertyData } = useAddPropertyContext();

    const list = [
        {
            key:"property_type",
            type: "text",
            lable: "Property Type",
            placeholder: "Enter Property Type...",
            value: ""
        },
        {
            key:"negotable",
            type: "text",
            lable: "Negotable",
            placeholder: "Yes/No",
            value: ""
        },
        {
            key:"price",
            type: "text",
            lable: "Price",
            placeholder: "eg. 20,45,000",
            value: ""
        },
        {
            key:"ownership",
            type: "text",
            lable: "Ownership",
            placeholder: "Self/Parent",
            value: ""
        },
        {
            key:"property_age",
            type: "text",
            lable: "Property Age",
            placeholder: "eg.1 year",
            value: ""
        },
        {
            key:"property_approved",
            type: "text",
            lable: "Property Approved",
            placeholder: "eg. Yes/No.",
            value: ""
        },
        {
            key:"property_desc",
            type: "text",
            lable: "Property Description",
            placeholder: "Enter Description here...",
            value: ""
        },
        {
            key:"bank_loan",
            type: "text",
            lable: "Bank Loan",
            placeholder: "eg. Yes/No",
            value: ""
        }
    ]
    const [listIP, setListIP] = useState(list);
    const onChangeList = (ipList) => {
        setListIP(ipList)
    }

    useImperativeHandle(saveRef,()=>({
        saveIpListDatainContext(){
            // console.log("BasicInfoComp- saveIpListDatainContext called");
            let obj = {};
            listIP.forEach(ele=>{
                obj[ele.key] = ele.value
            })
            setPropertyData(obj)
        }
    }))

    useEffect(() => {
        console.log("BasicInfoComp- current context value :",propertyData);
    }, [listIP])

    useEffect(() => {
        console.log("BasicInfoComp- Rendering...")// :", propertyData);
        setListIP(data=>{
            let newData=[...listIP].map(ipObj=>{
                ipObj.value=propertyData[ipObj.key];
                return ipObj
            });
            return newData
        })
    }, [])

    return (<>
        <div className="basicinfo-container">
            <FormComp listIP={listIP} onChangeList={onChangeList} />
        </div>
    </>)
});

export default BasicInfo;