import {TextField} from "@mui/material";
import * as React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const notify = () => toast("Thanks a lot for your response!!");


    return (
    <div className="h-screen py-10 w-full bg-stone-900">
        {/*<div className="flex flex-row px-12 py-4">*/}
        {/*    /!*<div className="flex-initial px-1 text-3xl my-auto font-bold text-white">*!/*/}
        {/*    /!*    waterR.*!/*/}
        {/*    /!*</div>*!/*/}
        {/*    <div className="my-auto ml-20 text-white">*/}
        {/*        <Button className="rounded-md px-2 ml-20 text-white hover:bg-stone-900 font-sans hover:font-bold" size="medium">Home</Button>*/}
        {/*        <Button className="rounded-md px-2 ml-20 text-white hover:bg-stone-900 font-sans hover:font-bold" size="medium">Work</Button>*/}
        {/*        <Button className="rounded-md px-2 ml-20 text-white hover:bg-stone-900 font-sans hover:font-bold" size="medium">Resume</Button>*/}
        {/*    </div>*/}
        {/*</div>*/}
        <div>
            <div className="h-[800px] flex flex-col text-white">
                <div className="px-8 flex-grow">
                    <div className="p-4 h-full">
                        <div className="w-full pt-20 h-full">
                            <div className="flex-initial text-center mx-auto text-3xl py-4 font-bold">
                                Hey there, We would love to hear your feedback.
                            </div>
                            <div className="flex-auto  font-mono pt-12 w-2/3 rounded-md mx-auto p-2 mx-2">
                                <p className="h-full mb-8">
                                    Name
                                </p>
                                <TextField className="text-white" color="white" id="filled-basic" size="small" variant="filled" fullWidth/>
                            </div>
                            <div className="flex-auto font-mono pt-12 w-2/3 rounded-md mx-auto  p-2 mx-2">
                                <p className="h-full mb-8">
                                    email
                                </p>
                                <TextField id="filled-basic" size="small" variant="filled" fullWidth/>
                            </div>
                            <div className="flex-auto font-mono pt-12 w-2/3 rounded-md mx-auto p-2 mx-2">
                                <p className="h-full mb-8">
                                    description
                                </p>
                                <TextField id="filled-basic" size="small" variant="filled" fullWidth/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-14 text-center px-14 my-auto py-4">
                    <div className="font-sans text-gray-500 text-xl">
                        <div id="scroll-container">
                            <div id="scroll-text" className="animate-my-animation cursor-pointer" onClick={notify}>
                                Send message
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}