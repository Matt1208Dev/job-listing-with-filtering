import React from "react";
import "./BadgeFilter.css";
import Badge from "../Badge/Badge";
import iconClose from "../../Assets/images/icon-remove.svg";
import { useDispatch } from "react-redux";

export default function BadgeFilter(props) {
    const dispatch = useDispatch();

    return (
        <div className="badge-filter">
            <Badge>{props.children}</Badge>
            <div
                onClick={() =>
                    dispatch({
                        type: "filter/removeFilter",
                        payload: props.dataTag,
                    })
                }
                className="btn-close"
            >
                <img src={iconClose} alt="icône croix" />
            </div>
        </div>
    );
}
