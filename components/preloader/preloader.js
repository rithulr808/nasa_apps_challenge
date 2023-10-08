import React, { useEffect } from "react";
import { preLoaderAnim } from "./animations";
import "./preloader.css";
const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader dark:bg-[#121314] shadow-2xl">
            {/*<span className="absolute top-12 left-12 text-2xl dark:text-white  font-bold text-black px-3">*/}
            {/*    */}
            {/*</span>*/}
            <div className="texts-container dark:text-white text-4xl">
                <span className="px-2"><span className="text-[#4a25e1]">r</span>educe.</span>
                <span className="px-2"><span className="text-[#4a25e1]">r</span>euse.</span>
                <span className="px-2"><span className="text-[#4a25e1]">r</span>ecycle.</span>
            </div>
        </div>
    );
};

export default PreLoader;