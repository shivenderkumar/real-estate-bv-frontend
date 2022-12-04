import React, { useContext, useEffect, useState } from "react";

const AddPropertyContext = React.createContext();

export default function AddPropertyContextProvider({ children }) {
    const [propertyData, setPropertyData] = useState({
        property_type: "",
        negotable:"",
        price:"",
        ownership:"",
        property_age:"",
        property_approved:"",
        property_desc:"",
        bank_loan:"",
        
        length:"",
        breadth:"",
        total_area:"",
        area_unit:"",
        no_of_bhk:"",
        no_of_floor:"",
        attached:"",
        western_toilet:"",
        furnished:"",
        car_parking:"",
        lift:"",
        electricity:"",
        facing:"",

        name:"",
        mobile:"",
        posted_by:"",
        sale_type:"",
        featured_package:"",
        ppd_package:"",

        email: "",
        city:"",
        area:"",
        pincode:"",
        address:"",
        landmark:"",
        latitude:"",
        longitude:""
    });

    const [allDataFilled, setAllDataFilled] = useState(false);

    useEffect(() => {
        console.log("ContextProvider- Rendering...propertydata changed : ",propertyData);
    }, [propertyData]);

    useEffect(() => {
        console.log("ContextProvider- Rendering...allDataFilled changed :"+allDataFilled+": ",propertyData);
    }, [allDataFilled]);

    return (
        <AddPropertyContext.Provider value={{
            propertyData, 
            setPropertyData: (listOfKeyVal) => {
                let newData = {
                    ...propertyData,
                    ...listOfKeyVal
                }
                // console.log("SetPropertyData :",newData);
                let flag=true;
                for(const key in newData){
                    if(newData[key].length < 1){
                        flag=false;
                    }
                }
                setPropertyData(newData);
                setAllDataFilled(flag);
            },
            allDataFilled
        }}>
            {children}
        </AddPropertyContext.Provider>
    )

}

export const useAddPropertyContext = () => useContext(AddPropertyContext) 
