import React from "react";
import "./BadgePill.css";

export default function BadgePill(props) {
    const txt = props.children;

    return (
        <span
            className={
                txt === "NEW!"
                    ? "badge-pill badge-cyan"
                    : txt === "FEATURED"
                    ? "badge-pill badge-dark"
                    : "badge-pill"
            }
        >
            {props.children}
        </span>
    );
}
