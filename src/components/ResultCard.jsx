import React from "react";
import { GrInstagram } from "react-icons/gr";

const ResultCard = ({ partner }) => {
    return (
        <article className="match-card">
            <div>
                <h2>{partner.name} </h2>
                <p>{partner.regNo.toUpperCase()}</p>
                <div className="insta">
                    <GrInstagram />
                    <p className="instaid">{partner.instaUserName || "Not Provided"}</p>
                </div>
            </div>
            <p className="percentage">
                {Math.round(partner.percent)}% <span>match</span>
            </p>
            <p className="bio">{partner.bio ? `${partner.bio} ` : "No Bio Provided"}</p>
        </article>
    );
};

export default ResultCard;
