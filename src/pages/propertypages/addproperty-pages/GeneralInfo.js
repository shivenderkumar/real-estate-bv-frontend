import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import "../../../styles/GeneralInfo.css"
import { useAddPropertyContext } from "../contexts-providers/AddPropertyContextProvider";
import FormComp from "../form-utils/FormComp";

const GeneralInfo = forwardRef((props, saveRef)=>{    
    const {propertyData, setPropertyData} = useAddPropertyContext();

    const list = [
        {
            key:"name",
            type: "text",
            lable: "Name",
            placeholder: "Enter Name here...",
            value: ""
        },
        {
            key:"mobile",
            type: "text",
            lable: "Mobile",
            placeholder: "eg.9745687845",
            value: ""
        },
        {
            key:"posted_by",
            type: "text",
            lable: "Posted By",
            placeholder: "eg.Posted By",
            value: ""
        },
        {
            key:"sale_type",
            type: "text",
            lable: "Sale Type",
            placeholder: "eg.Sale type",
            value: ""
        },
        {
            key:"featured_package",
            type: "text",
            lable: "Featured Package",
            placeholder: "eg.24,000",
            value: ""
        },
        {
            key:"ppd_package",
            type: "text",
            lable: "PPD Package",
            placeholder: "eg.2,20,220",
            value: ""
        }
    ]
    const [listIP, setListIP] = useState(list);
    const onChangeList= (ipList)=>{
        setListIP(ipList)
    }

    useImperativeHandle(saveRef,()=>({
        saveIpListDatainContext(){
            // console.log("GeneralInfoComp- saveIpListDatainContext called");
            let obj = {};
            listIP.forEach(ele=>{
                obj[ele.key] = ele.value
            })
            setPropertyData(obj)
        }
    }))

    useEffect(()=>{
        console.log("GeneralInfoComp- current context value :",propertyData);
    },[listIP])

    useEffect(() => {
        console.log("GeneralInfoComp- Rendering...")// :", propertyData);
        setListIP(data=>{
            let newData=[...listIP].map(ipObj=>{
                ipObj.value=propertyData[ipObj.key];
                return ipObj
            });
            return newData
        })
    }, [])

    return(<>
    <div className="generalinfo-container">
        <FormComp listIP={list} onChangeList={onChangeList} />
    </div>
    </>)
})

export default GeneralInfo;