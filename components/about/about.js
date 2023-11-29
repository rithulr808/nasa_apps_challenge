"use client";


import * as React from "react";
import "./about.css";
import Preloader from "/components/preloader/preloader";
import img_dark from '/assets/Darkmode.png'
import img_light from '/assets/Lightmode.png'
import gif_1 from 'assets/1.gif'
import gif_2 from 'assets/3.gif'
import Image from "next/image";
import Link from 'next/link';
import Globe from "../globe/globe";
import About from "../about";
import Skills from "../skills";

const AboutPage = () => {

    return (
        <div>
            <section className="scroll-snap-start">
                <Preloader style={{backgroundColor: "#FFFFFF"}} />
                <div className="z-100 bg-[#0F0E0E] overflow-hidden">
                    <div
                        className="flex justify-center backdrop-blur-sm items-center w-full fixed z-50 top-0 p-2 ">
                        <div className="flex w-[95%] mt-3 justify-center text-gray-500 font-bold px-6 rounded p-2 mx-auto">
                            <div
                                className="rounded-md hover:text-white hover:bg-black/50 px-4 py-2 text-gray-600 font-semibold"
                                size="medium"><Link href={"#"} >Home</Link>
                            </div>
                            <div
                                className="rounded-md hover:text-white hover:bg-black/50 px-4 py-2 text-gray-600 font-semibold"
                                size="medium"><Link href={'#learn'}>Download CV</Link>
                            </div>
                        </div>
                    </div>
                    <div className="bg-stone-100">
                        <About/>
                    </div>
                    {/*<div*/}
                    {/*    className="scroll-snap text-white p-12 h-screen scale-12">*/}
                    {/*    <div className="mt-32 w-[80%] mx-auto group-hover:scale-110 transition-all duration-1000">*/}
                    {/*        <div*/}
                    {/*            className="font-normal text-white/40  font-mono text-sm px-2 py-2 rounded mx-auto  bg-[#1A1A1A] ">*/}
                    {/*            Water is the essence of life, shaping ecosystems, sustaining human health, and driving economic activities worldwide.*/}
                    {/*        </div>*/}
                    {/*        <div className=" flex lg:flex-row flex-col  p-8 items-center min-h-[600px]">*/}
                    {/*            <div className="w-full mt-12 h-full">*/}
                    {/*                <div*/}
                    {/*                    className="flex-initial text-center lg:text-left  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 items-center  text-3xl  lg:text-7xl  py-4">*/}
                    {/*                    Everything Starts with Water*/}
                    {/*                </div>*/}
                    {/*                <p className="my-12 text-justify md:text-left font-mono">*/}
                    {/*            <span className="font-extrabold  font-mono pr-2">*/}
                    {/*                Water's flow, in every strife, brings forth the gift, that water is life.*/}
                    {/*            </span>*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            /!*<div className="font-mono tracking-wide w-1/2 invisible items-center   lg:visible text-left flex   h-full">*!/*/}
                    {/*            /!*    <div className=" px-4 items-center ">*!/*/}
                    {/*            /!*        <div className="hover:scale-110 transition-all items-center  duration-1000 ">*!/*/}
                    {/*            /!*            <Globe/>*!/*/}
                    {/*            /!*        </div>*!/*/}
                    {/*            /!*    </div>*!/*/}
                    {/*            /!*</div>*!/*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div
                    className="flex items-center font-mono justify-center pr-4 bg-gray-900 text-white  text-4xl  lg:text-7xl font-bold h-[400px] w-full">
                    Eat, Sleep,
                    <div className="overflow-clip text-center p-1 h-[80px]">
                        <div id="animated-element" className="animate-translate-loop ">
                            <p className="mx-2 mb-8">
                                Code  💻
                            </p>
                            <p className="mx-2  my-8">
                                Game 🎮
                            </p>
                            <p className="mx-2  my-8">
                                Repeat 🧠
                            </p>
                            <p className="mx-2  my-8">
                                ;)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-fit  bg-white flex flex-col">
                    <div className="px-8 border-t  border-l border-t-gray-300  flex-grow">
                        <div className="flex  py-64 lg:flex-row flex-col border-r p-4 border-gray-300 h-full">
                            <div className="w-full h-full p-4">
                                <div className="flex-initial px-1 text-center text-6xl py-4 font-bold">
                                    <div className="p-4 font-['Roboto'] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 items-center my-16">
                                        Dual Visual Themes
                                    </div>
                                    <div></div>
                                    <Image src={gif_1} alt={"oops image not found"}
                                           className="w-[40%] mx-auto  rounded-2xl hover:scale-105 transition-all duration-1000 ease-in-out"/>
                                </div>
                                <div className="flex-auto rounded-md text-center p-2 mx-2">
                                    <p className="text-black font-mono text-black/70  h-full">
                                        A clean and bright interface for a refreshing chat experience
                                    </p>
                                </div>
                            </div>
                            <div className="w-full h-full p-4">
                                <Image src={gif_2} alt={"oops image not found"}
                                       className="w-[40%] mx-auto  rounded-2xl  hover:scale-105 transition-all duration-1000 ease-in-out"/>
                                <div className="flex-auto rounded-md mt-4 text-center p-2 mx-2">
                                    <p className="text-black font-mono text-black/70  h-full">
                                        Elegant and easy on the eyes, perfect for nighttime conversations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*<div className="w-full border-t-2">*/}

                        {/*</div>*/}
                        <div>
                            <div className="container mx-auto py-6">
                            <p className="text-black  text-justify font-mono text-black/70  h-full">
                                about
                            </p>
                            <p>
                                🤠 I'm a senior at Tufts University studying Engineering Psychology (Human Factors Engineering) and Studio Art. Currently, I'm studying abroad at the University of the Arts London. I'm a product designer and a photographer.
                                ‍
                            </p>
                            <p>
                                🏠 Guangzhou & NYC
                            </p>
                            <p>

                                👀 Breaking Bad, Howl's Moving Castle, Silicon Valley, AOT, BEEF, Severance, GoT, To Your Eternity, Frieren, Everything Everywhere All at Once, Ranking of Kings, Succession
                            </p>
                            <p>
                                🎵 Kendrick Lamar, Stromae, Joe Hisaishi, Aurora, Angèle, Eason Chan, ROSALÍA
                            </p>
                            <p>
                                courses<br/>
                                ✶  Web Programming (HTML/CSS, Javascript)<br/>
                                ‍✶  CS 11 (C++)<br/>
                                ✶  Methods for Human Factors Engineering<br/>
                                ✶  Human-Computer Interaction<br/>
                                ✶  Computer Interface Design (Figma)<br/>
                                ✶  Human Factors Product Design (Semester-long industry-sponsored project)<br/>
                                ✶  Advanced Engineering Psychology (Research Paper: Applications and Human Factors Considerations of AR for Medical Training)<br/>
                                ✶  Statistics for Behavioral Sciences (R)<br/>
                                ✶  Experimental Psychology<br/>
                                ✶  Entrepreneurial Marketing and Saless<br/>
                                ✶  Visualizing Information (Adobe Illustrator)<br/>
                                ✶  The Science and Culture of Antarctica<br/>
                                ✶  Ghibli/Disney (Research Paper: Thinking Beyond Human Exceptionalism with the Animistic Sublime, Entanglements, and Ikiro in Animation Films)<br/>
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-b h-14 text-center px-14 my-auto py-4 border-gray-300">
                        <div className="bar overflow-clip font-bold text-xl">
                            <div id="scroll-container ">
                                <div id="scroll-text" className="bar_content min-w-max overflow-clip  font-mono text-clip">
                                    <span className="px-24">
                                        Scalable
                                    </span>
                                    <span className="px-24">
                                        Secure
                                    </span>
                                    <span className="px-24">
                                        Contextual Responses
                                    </span>
                                    <span className="px-24">
                                        Multi-lingual
                                    </span>
                                    <span className="px-24">
                                        Easy to Use
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="flex items-center justify-center pr-4  bg-stone-900   min-h-[800px] w-full">*/}
                {/*    <div className="w-full flex px-12 lg:flex-row flex-col p-8 items-center min-h-[600px]">*/}
                {/*        <div className="flex flex-col  items-center justify-center w-full  h-full">*/}
                {/*            /!*<div className="one-div mt-24"></div>*!/*/}
                {/*        </div>*/}
                {/*        <div className="w-4/5 flex-col text-left px-2 mx-auto text-xl text-white tracking-wide items-center h-full">*/}
                {/*            <p className="text-white/50 text-4xl my-16 font-mono">*/}
                {/*                The Water Cycle: Nature's Endless Recycler*/}
                {/*            </p>*/}
                {/*            <p className="my-12 font-mono">*/}
                {/*                <span className="font-extrabold font-mono pr-2">*/}

                {/*            At the heart of Earth's climate system lies the water cycle,*/}
                {/*            a continuous and complex process that redistributes water*/}
                {/*            throughout the planet. This cycle comprises four main stages:*/}
                {/*            evaporation, condensation, precipitation, and collection.*/}
                {/*            It starts with the heating of the Earth's surface,*/}
                {/*            which causes water to evaporate from oceans, lakes,*/}
                {/*            and rivers, forming clouds as it rises.*/}
                {/*            When these clouds reach a saturation point,*/}
                {/*            water droplets condense and fall back to Earth as*/}
                {/*            precipitation, which can take the form of rain, snow,*/}
                {/*            or hail. Finally, this water collects in oceans,*/}
                {/*            lakes, rivers, and underground reservoirs, ready to begin the cycle anew.*/}
                {/*                </span>*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="shadow-3xl bg-stone-900  shadow-black">*/}
                {/*    <p className="md:text-7xl mx-auto w-[80%] font-bold text-white/80 text-center align-middle relative py-[23%]">*/}
                {/*        Water is life's eternal cradle, nurturing existence with every drop.*/}
                {/*    </p>*/}
                {/*    <div id={"about"}*/}
                {/*         className={"h-fit  p-1 overflow-hidden bg-[#1f1f1f] flex flex-wrap justify-start mt-10 md:justify-center"}>*/}
                {/*        <div className={"w-full md:w-1/2 max-h-1/2 mt-10  xl:mt-20 flex flex-col justify-center flex-wrap "}>*/}
                {/*            /!*<div className="bg-white w-full ">*!/*/}
                {/*            /!*    <Image unoptimized={true}  src={ghost} alt={"oops image not found"}*!/*/}
                {/*            /!*           className="w-[90%] mx-auto "/>*!/*/}
                {/*            /!*</div>*!/*/}
                {/*            <div className={"w-full mb-2"}>*/}
                {/*                <h4 className={"text-[#ef6c50] "}>About me </h4>*/}
                {/*                <div className={"w-44   border-b border-b-[#ef6c50] text-[#ef6c50]"}>*/}
                {/*                    /!*<hr className={"w-full h-[2px] border-0 mt-3 ml-5 bg-[#ef6c50] text-[#ef6c50]"}/>*!/*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={"w-full text-md text-white"}>*/}
                {/*                <div className={"w-full mb-4 font-bold text-2xl md:text-4xl"}>*/}
                {/*                    Creativity is a boundless wellspring within, the more you draw from it, the deeper and richer it becomes in the reservoir of your significant mind.*/}
                {/*                </div>*/}
                {/*                <div className={"text-xl text-[#bdbdbd]  w-full"}>*/}
                {/*                    Driven by a profound passion for programming, I am a committed student actively pursuing the development of a robust skill set and comprehensive knowledge in computer science. My unwavering dedication is aimed at establishing a successful foundation, and I approach learning with a perpetual enthusiasm to continually enhance my capabilities. Fueled by a genuine desire to engineer practical solutions for intricate problems, I pride myself on delivering consistently high-quality results.*/}

                {/*                    Motivated by the boundless possibilities inherent in programming, I am inspired to explore innovative avenues that have the potential to bring about positive change. With a focus on excellence, I aim to contribute to the creation of solutions that not only meet the demands of complexity but also foster advancements that make a meaningful impact.*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*  hello*/}
                {/*</div>*/}

                {/*<div className="scroll-snap">*/}
                {/*    <div className=" min-h-screen pb-32 w-full bg-stone-900">*/}
                {/*        <div id="chatbox">*/}
                {/*            <div className=" flex px-12 lg:flex-row flex-col  items-center min-h-[600px]">*/}
                {/*                <div className="w-full pl-12 mx-auto h-full">*/}
                {/*                    <div*/}
                {/*                        className="flex-initial mx-auto text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 items-center mt-16 text-3xl  lg:text-7xl  py-4">*/}
                {/*                        Climate Change and the Water Cycle: A Disruptive Influence*/}
                {/*                    </div>*/}
                {/*                    <div className="text-white mx-auto font-mono tracking-wide  text-left">*/}
                {/*                        <div>*/}
                {/*                            Climate change, driven primarily by human activities like the burning of fossil fuels and deforestation, is having a profound impact on the Earth's water cycle. Rising global temperatures intensify this cycle, leading to uneven distribution of freshwater resources, increased frequency of extreme weather events, and changes in precipitation patterns.*/}
                {/*                        </div>*/}
                {/*                        /!*<div*!/*/}
                {/*                        /!*    className="mt-2 hover:text-white hover:cursor-pointer text-xl text-cyan-200 underline">*!/*/}
                {/*                        /!*    <Link href="/">preview</Link>*!/*/}
                {/*                        /!*</div>*!/*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                <div className="w-full mt-40 tracking-wide mx-auto h-full">*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </div>
    )
}

export default AboutPage;