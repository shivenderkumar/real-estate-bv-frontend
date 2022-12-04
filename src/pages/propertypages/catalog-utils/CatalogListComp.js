import React from "react"
import "../../../styles/CatalogListComp.css"
import CatalogListItemComp from "./CatalogListItemComp"

export default function CatalogListComp({ list }) {
    const dummyList = [{
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }, {
        ppd_id: "PPD1125",
        image_url: "",
        property: "Plot",
        contact: "97852 52525",
        area: "1200",
        views: "02",
        status: "Sold",
        days_left: "00"
    }]

    return (<>
        <div className="catalogList-conatiner">
            <div className="grid-row">
                <div className="row-header-item"><b>PPD ID</b></div>
                <div className="row-header-item"><b>Image</b></div>
                <div className="row-header-item"><b>Property</b></div>
                <div className="row-header-item"><b>Contact</b></div>
                <div className="row-header-item"><b>Area</b></div>
                <div className="row-header-item"><b>Views</b></div>
                <div className="row-header-item"><b>Status</b></div>
                <div className="row-header-item"><b>Days Left</b></div>
                <div className="row-header-item"><b>Action</b></div>
            </div>
            {
                dummyList.map((obj, index) => {
                    return <div className="grid-row" key={index} >
                        <CatalogListItemComp obj={obj} />
                    </div>
                })
            }
        </div>
    </>)

}