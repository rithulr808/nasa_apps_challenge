'use client'

import Header from "../components/header";
import About from "../components/about";
import DisplayGrid from "../components/grid";
import 'tailwindcss/tailwind.css'
import Contact from "../components/contact";
import useScrollSnap from 'react-use-scroll-snap';
import {useRef} from "react";
import * as React from "react";
import AboutPage from "../components/about/about";
import Quiz from "../components/quiz";
import Chat from "../components/chatbot/chat";





export default function LandingPage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 100, delay: 20 });

    return (
        <div className="bg-stone-100 text-gray-800 w-full h-fit ">
            <section ref={scrollRef} className="scroll-snap-start">
                <div className="scroll-snap-one">
                    <AboutPage/>
                </div>
                <div id={"learn"} className="h-fit py-24 px-16 scroll-snap-two">
                    <DisplayGrid/>
                </div>
                <div>
                    <Contact/>
                </div>
            </section>
        </div>
    )
}
