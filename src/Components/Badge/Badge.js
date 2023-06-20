import React from "react";
import './Badge.css';
import { useDispatch } from "react-redux";


export default function Badge(props) {
    const dispatch = useDispatch();

    return <button className="badge" onClick={() => dispatch({
        type: "filter/addFilter",
        payload: props.children
    })}>{props.children}</button>;
}
