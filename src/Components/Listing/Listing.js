import React, { useState, useEffect } from "react";
import Data from "../../Data/data.json";
import "./Listing.css";
import JobItem from "../JobItem/JobItem";
import FilterGroup from "../FilterGroup/FilterGroup";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

export default function Listing() {
    const tags = useSelector((state) => state.filter);
    // Etat en filtrage
    const [isFiltering, setIsFiltering] = useState(false);

    // Activation de l'état "en filtrage", selon la présence ou non de filtre
    useEffect(() => {
        if (tags.length === 0) {
            setIsFiltering(false);
        } else {
            setIsFiltering(true);
        }
    }, [tags]);

    return (
        <div className="container">
            <div className="banner"></div>
            <div className="list">
                <FilterGroup isFiltering={isFiltering} />
                {Data.map((item) => {
                    // Si un tag (au moins) est selectionné
                    if (isFiltering) {
                        // On récupère les tags de l'item courant
                        const itemTags = [
                            item.level,
                            item.role,
                            ...item.languages,
                            ...item.tools,
                        ];
                        // Et on les comparent au tag sélectionné
                        for (let tag of tags) {
                            // S'il est présent dans l'item courant, on affiche l'item (annonce)
                            if (itemTags.includes(tag)) {
                                return <JobItem key={uuidv4()} data={item} />;
                            }
                        }
                    } else {
                        // Pas de tag sélectionné : On affiche tous les items (annonces)
                        return <JobItem key={uuidv4()} data={item} />;
                    }
                })}
                <div class="attribution">
                    <p>
                        Challenge by{" "}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                        >
                            Frontend Mentor
                        </a>
                        . Coded by Matthieu Gueulle.
                    </p>
                </div>
            </div>
        </div>
    );
}
