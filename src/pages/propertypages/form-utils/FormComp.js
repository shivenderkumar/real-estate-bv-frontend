import React, { useEffect, useState } from "react";
import "../../../styles/FormComp.css";
import InputComp from "./InputComp";


export default function FormComp({listIP, onChangeList}){

    const [inputList, setInputList] = useState(listIP);

    const onInputValChange = (input) => {
        setInputList(data => {
            let newData = [...inputList].map((obj)=>{
                if(obj.lable == input.lable){
                    return {
                        ...obj,
                        value: input.value
                    }
                }
                return obj;
            })
            return newData;
        });
    }

    useEffect(() => {
        // console.log("FormComp - Form Data Updated");
        onChangeList(inputList);
    }, [inputList])

    return (<>
        <div className="formcomp-container">
            <form>
                {
                    inputList.map((input, index) => {
                        if (input.type == "text") {
                            return <InputComp key={index} input={input} onInputValChange={onInputValChange} />
                        }
                    })
                }

            </form>
        </div>
    </>)
}
