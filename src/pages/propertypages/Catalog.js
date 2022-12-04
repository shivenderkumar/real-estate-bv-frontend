import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPropertyListApi } from "../../api-utils/Api";
import "../../styles/Catalog.css";
import CatalogListComp from "./catalog-utils/CatalogListComp";
import Button from "react-bootstrap/Button";
import {Plus} from "react-bootstrap-icons";

export default function Catalog() {
   
    const navigate = useNavigate();
    const [propertyList, setPropertyList] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");

    useEffect(() => {
        getPropertyListApi().then(res => {
            setPropertyList(res.filter(obj => obj.name.includes(searchTxt)));
            console.log("Catalog- List ", propertyList);
        })
    }, [searchTxt])

    function addProperyClickHandler() {
        navigate("/home/add");
    }

    return (
        <>
            <div className="catalog-container">
                <div className="search-addbtn-container">
                    <div className="search-container">
                            <input type="text" placeholder="search here..." value={searchTxt} onChange={(e) => {
                                setSearchTxt(e.target.value);
                            }} />
                    </div>
                    <div className="addbtn-container">
                        <Button variant="primary" className="addbtn" onClick={addProperyClickHandler}>
                            <Plus className="add"/>Add property</Button>
                    </div>
                </div>
                <div className="table-container">
                    <CatalogListComp list={propertyList} />
                </div>

            </div>
        </>
    )
}