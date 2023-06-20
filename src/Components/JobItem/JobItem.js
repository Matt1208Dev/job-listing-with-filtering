import React, { useState } from "react";
import "./JobItem.css";
import Badge from "../Badge/Badge";
import BadgePill from "../BadgePill/BadgePill";
import { v4 as uuidv4 } from "uuid";

export default function JobItem(props) {
    // Données d'une annonce fournies via props
    const [data, setData] = useState({ ...props.data });

    return (
        <div key={data.id} className="job-item">
            {data.featured && <div className="featured"></div>}
            <div className="job-infos">
                {/* Logo */}
                <img
                    className="job-infos__pic"
                    src={process.env.PUBLIC_URL + data.logo}
                    alt={`Logo de ${process.env.PUBLIC_URL + data.company}`}
                />
                {/* Textes */}
                <div className="job-infos__txt">
                    {/* Nom entreprise, badges nouveauté, mise en avant */}
                    <header className="job-infos__txt__header">
                        <h4 className="company">{data.company}</h4>
                        {data.new && <BadgePill>NEW!</BadgePill>}
                        {data.featured && <BadgePill>FEATURED</BadgePill>}
                    </header>
                    {/* Intitulé de poste */}
                    <h3>
                        <a className="position" href="#">
                            {data.position}
                        </a>
                    </h3>
                    {/* Infos ancienneté, lieu, contrat */}
                    <div className="job-infos__txt__details">
                        <span>{data.postedAt}</span>
                        <span>▪</span>
                        <span>{data.contract}</span>
                        <span>▪</span>
                        <span>{data.location}</span>
                    </div>
                </div>
            </div>
            <hr className="separator" />
            {/* Badges */}
            <div className="job-infos__tags">
                {data.role && <Badge>{data.role}</Badge>}
                {data.level && <Badge>{data.level}</Badge>}
                {data.languages
                    ? data.languages.map((language, index) => {
                          return <Badge key={uuidv4()}>{language}</Badge>;
                      })
                    : ""}
                {data.tools
                    ? data.tools.map((tool, index) => {
                          return <Badge key={uuidv4()}>{tool}</Badge>;
                      })
                    : ""}
            </div>
        </div>
    );
}
