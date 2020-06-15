import React from 'react';
import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "Hot, hot summer",
        icon: "sun",
        seasonType: "summer"
    },
    winter: {
        text: "It's chilly!!!",
        icon: "snowflake",
        seasonType: "winter"
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter"
    }
    return lat < 0 ? "summer" : "winter"

}

const SeasonDisplay = (props) => {

    const season = getSeason(props.lat, new Date().getMonth())
    // const text = season === "winter" ? "It's chilly!!!" : "Hot, hot summer"
    // const iconType = season === "winter" ? "snowflake" : "sun"
    const { text, icon, seasonType } = seasonConfig[season]

    return (
        <div className={`container ${seasonType}`}>
            {/* <div> {(props.lat === null && props.errMessage.length <= 0) && "Loading"}
                {(props.lat != null && props.errMessage.length <= 0) && `Latitude : ${props.lat}`}</div> */}

            {/* {props.lat !== null && `${season}`} */}
            {/* <i style={{ fontSize: "140px", marginTop: "50px" }} className={`${iconType} outline icon`}></i>
            {props.lat !== null && <h1>{text}</h1>}
            <i style={{ fontSize: "140px", marginTop: "50px" }} className={`${iconType} outline icon`}></i> */}
            <div>
                <i className={`${icon} outline icon right `}></i>
                <h1>{text}</h1>
                <i className={`${icon} outline icon left `}></i>
            </div>
        </div>
    )
}

export default SeasonDisplay
