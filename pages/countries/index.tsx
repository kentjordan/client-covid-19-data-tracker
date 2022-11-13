import React from "react";
import CountriesContainer from "@components/containers/Countries.container";

const Countries = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh] bg-red-800">
            <CountriesContainer />
            <h1>Countries</h1>
        </div>
    )
};

export default Countries;
