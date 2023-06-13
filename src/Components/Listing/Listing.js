import React from "react";
import Data from "../../Data/data.json";
import "./Listing.css";
import JobItem from "../JobItem/JobItem";

export default function Listing() {
    console.log(Data);
    return (
        <div className="container">
            <div className="banner"></div>
            <div className="list">
                {Data.map((item) => {
                    return <JobItem data={item} />;
                })}
            </div>
        </div>
    );
}
