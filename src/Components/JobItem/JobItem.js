import React, { useState } from "react";
import "./JobItem.css";
import Badge from "../Badge/Badge";
import BadgePill from "../BadgePill/BadgePill";

export default function JobItem(props) {
    const data = useState({ ...props.data });
    const tools = data[0].tools;
    const languages = data[0].languages;

    console.log(data);
    return (
        <div className="job-item">
            {data[0].featured && <div className="featured"></div>}
            <div className="job-infos">
                {/* Logo */}
                <img
                    className="job-infos__pic"
                    src={process.env.PUBLIC_URL + data[0].logo}
                    alt={`Logo de ${
                        process.env.PUBLIC_URL + data[0].company
                    }`}
                />
                {/* Textes */}
                <div className="job-infos__txt">
                    <header className="job-infos__txt__header">
                        <h4 className="company">{data[0].company}</h4>
                        {data[0].new && <BadgePill>NEW!</BadgePill>}
                        {data[0].featured && <BadgePill>FEATURED</BadgePill>}
                    </header>
                    <h3>
                        <a className="position" href="#">
                            {data[0].position}
                        </a>
                    </h3>
                    <div className="job-infos__txt__details">
                        <span>{data[0].postedAt}</span>
                        <span>▪</span>
                        <span>{data[0].contract}</span>
                        <span>▪</span>
                        <span>{data[0].location}</span>
                    </div>
                </div>
            </div>
            <div className="job-infos__tags">
                {data[0].role && <Badge>{data[0].role}</Badge>}
                {data[0].level && <Badge>{data[0].level}</Badge>}
                {languages
                    ? data[0].languages.map((language, index) => {
                          return <Badge>{language}</Badge>;
                      })
                    : ""}
                {tools
                    ? data[0].tools.map((tool, index) => {
                          return <Badge>{tool}</Badge>;
                      })
                    : ""}
            </div>
        </div>
    );
}
