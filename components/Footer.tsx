import React from "react";

const Footer = () => {
    return (
        <div className='h-24 w-full flex flex-col justify-center items-center bg-stone-900 text-white absolute'>
            <h1 className="text-lg font-bold">Made by Kent Jordan with ❤️</h1>
            <p className="text-xs text-stone-400">Built upon NEXT, Express and Typescript</p>
        </div>
    );
};

export default Footer;
