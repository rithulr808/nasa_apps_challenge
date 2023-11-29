// import 'tailwindcss/tailwind.css'
// import * as React from "react";
//
// export  default function About() {
//     return (
//         <div className="h-[800px] flex flex-col">
//             <div className="px-8 border-t border-t-gray-300 flex-grow">
//                 <div className="flex lg:flex-row flex-col border-r  p-4 border-gray-300 h-full">
//
//                     <div className="w-full h-full">
//                         <div
//                             className="flex-initial text-center lg:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 items-center mt-16 text-3xl  lg:text-7xl  py-4">
//                             Everything Starts with Water
//                         </div>
//                         <div className="flex-auto rounded-md text-center p-2 mx-2">
//                             <p className="text-black  h-full">
//                                more water |
//                            </p>
//                         </div>
//                     </div>
//                     <div className="w-full h-full" >
//                         hmm
//                     </div>
//                 </div>
//             </div>
//             <div className="border-t border-b h-14 text-center px-14 my-auto py-4 border-gray-300">
//                 <div className="font-bold text-xl">
//                     <div id="scroll-container">
//                          <div id="scroll-text" className="animate-my-animation">
//                             This is scrolling text.
//                          </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
import 'tailwindcss/tailwind.css'
import Image from "next/image";
import sticker_1 from "../assets/bug_off.png";
import photo from "../assets/profile.png";
import * as React from "react";

export  default function About() {
    return (
        <div className="h-[800px] pt-32 flex flex-col">
            <div className="px-8 border-t border-t-gray-300 flex-grow">
                <div className="flex lg:flex-row flex-col border-r items-center  bg-gray-100 p-4 border-gray-300 h-full">

                    <div className="mx-auto w-1/3">
                        <p className="text-black text-xl  font-mono text-black/70  h-full">
                        👋 Hey, I'm
                        </p>
                        <div className="  font-black text-7xl font-mono">
                            Sai
                            <p>
                                krishna.
                            </p>
                        </div>
                        <p className="text-black text-xl  font-mono text-black/70  h-full">
                            turning caffeine into code and bugs into features! 💻✨😄
                        </p>
                    </div>
                    <div className="relative flex mx-auto rounded-full p-12 border-2 border-gray-200 ">
                        <div className="flex relative mx-auto justify-center shadow-xl  items-center bg-gray-200 ove h-96 w-96  rounded-full ">
                            <Image src={photo} alt={"oops image not found"}
                                   className="w-full bottom-8 drop-shadow-2xl mx-auto relative scale-125 rounded-2xl "/>
                            <Image src={sticker_1} alt={"oops image not found"}
                                   className="w-[50%] z-20 bottom-8 drop-shadow-2xl shadow-purple-900 mx-auto absolute -top-10 left-64 rounded-2xl "/>
                        </div>
                        <Image src={sticker_1} alt={"oops image not found"}
                               className="w-[50%] z-20 bottom-8 drop-shadow-2xl shadow-purple-900 mx-auto absolute -top-10 -left-60 rounded-2xl "/>
                    </div>
                    {/*<div className="w-full h-full bg-gray-200">*/}
                    {/*    /!*<div className="flex-initial px-1 text-center text-6xl py-4 font-bold">*!/*/}
                    {/*    /!*    👋  Howdy! I’m hmm.*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*    /!*<div className="flex-auto rounded-md text-center p-2 mx-2">*!/*/}
                    {/*    /!*    <p className="text-black  h-full">*!/*/}
                    {/*    /!*        hello world*!/*/}
                    {/*    /!*    </p>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</div>*/}
                    {/*<div className="w-full h-full" >*/}
                    {/*    wat up*/}
                    {/*</div>*/}
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
            {/*<div className="border-t border-b h-14 text-center px-14 my-auto py-4 border-gray-300">*/}
            {/*    <div className="font-bold text-xl">*/}
            {/*        <div id="scroll-container">*/}
            {/*            <div id="scroll-text" className="animate-my-animation">*/}
            {/*                This is scrolling text.*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div<div className="border-t border-b h-14 text-center px-14 my-auto py-4 border-gray-300">
                <div className="font-bold text-xl">
                    <div id="scroll-container">
                        <div id="scroll-text" className="animate-my-animation">
                            This is scrolling text.
                        </div>
                    </div>
                </div>
            </div>>*/}
        </div>
    )
}