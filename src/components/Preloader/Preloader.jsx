import React from "react";
import preloader from "./../../img/preloader.svg"

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt="preloader"/>
        </div>
    );
};

export default Preloader;
