import React from "react";
import "./FilterGroup.css";
import BadgeFilter from "../BadgeFilter/BadgeFilter";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

export default function FilterGroup(props) {
    const tags = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return (
        <div
            className={
                props.isFiltering
                    ? "container filter-group"
                    : "container filter-group vis-hidden"
            }
        >
            <div className="filters">
                {tags.map((tag) => {
                    return (
                        <BadgeFilter key={uuidv4()} dataTag={tag}>
                            {tag}
                        </BadgeFilter>
                    );
                })}
            </div>

            <button
                onClick={() =>
                    dispatch({
                        type: "filter/clearFilters",
                        payload: "",
                    })
                }
                className="btn-clear"
            >
                Clear
            </button>
        </div>
    );
}