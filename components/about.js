import 'tailwindcss/tailwind.css'
import * as React from "react";

export  default function About() {
    return (
        <div className="h-[800px] flex flex-col">
            <div className="px-8 border-t border-t-gray-300 flex-grow">
                <div className="flex lg:flex-row flex-col border-r  p-4 border-gray-300 h-full">

                    <div className="w-full h-full">
                        <div
                            className="flex-initial text-center lg:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 items-center mt-16 text-3xl  lg:text-7xl  py-4">
                            Everything Starts with Water
                        </div>
                        <div className="flex-auto rounded-md text-center p-2 mx-2">
                            <p className="text-black  h-full">
                               more water |
                           </p>
                        </div>
                    </div>
                    <div className="w-full h-full" >
                        wat up
                    </div>
                </div>
            </div>
            <div className="border-t border-b h-14 text-center px-14 my-auto py-4 border-gray-300">
                <div className="font-bold text-xl">
                    <div id="scroll-container">
                         <div id="scroll-text" className="animate-my-animation">
                            This is scrolling text.
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}