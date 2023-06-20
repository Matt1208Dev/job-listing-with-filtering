import React, { useState, useEffect } from "react";
import Data from "../../Data/data.json";
import "./Listing.css";
import JobItem from "../JobItem/JobItem";
import FilterGroup from "../FilterGroup/FilterGroup";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export default function Listing() {
    const tags = useSelector((state) => state.filter);
    const [isFiltering, setIsFiltering] = useState(false);

    useEffect(() => {
        if (tags.length === 0) {
            setIsFiltering(false);
        } else {
            setIsFiltering(true);
        }
    }, [tags])

    return (
        <div className="container">
            <div className="banner"></div>
            <div className="list">
            <FilterGroup isFiltering={isFiltering} />
                {Data.map((item) => {
                    if (isFiltering) {
                        const itemTags = [
                            item.level,
                            item.role,
                            ...item.languages,
                            ...item.tools,
                        ];
                        for (let tag of tags) {
                            if (itemTags.includes(tag)) {
                                return <JobItem key={uuidv4()} data={item} />;
                            }
                        }
                    } else {
                        return <JobItem key={uuidv4()} data={item} />;
                    }
                })}
            </div>
        </div>
    );
}
