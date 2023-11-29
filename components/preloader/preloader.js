import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations";
import "./preloader.css";
import Image from "next/image";
import gif_2 from "../../assets/3.gif";
const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader z-100 dark:bg-[#121314] shadow-2xl">
            {/*<span className="absolute top-12 left-12 text-2xl dark:text-white  font-bold text-black px-3">*/}
            {/*    */}
            {/*</span>*/}
            <div className="texts-container dark:text-black text-4xl">
                <span className="px-2"><span className="text-[#4a25e1]">re:</span>hola!</span>
                <span className="px-2 w-[150px] overflow-hidden"><Image src={gif_2} alt={"oops image not found"} className="w-[350px]"/></span>
            </div>
        </div>
    );
};

export default PreLoader;