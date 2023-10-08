import 'tailwindcss/tailwind.css'
import Header from "../../components/header";
import { useRouter } from 'next/router';
import {items} from "../../components/data";
import Image from 'next/image'
import Link from "next/link";
import * as React from "react";
import Quiz from "../../components/quiz";



export default function Projects() {

    const router = useRouter();
    const { param1 } = router.query;
    // console.log(param1)
    const data = items[param1]
    // console.log(data)
    const title = data?.title
    const des = data?.description
    const ImageLink = data?.imageLink

    const styles = {
        backgroundImage: `url(${ImageLink})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
    };


    return (
        <div>
            {/*<Header/>*/}
            <div
                className="flex justify-center bg-stone-100 border-b-2 border-stone-200 items-center w-full ">
                <div className="flex w-[95%] mt-3 justify-center text-stone-900 font-bold px-6 rounded p-2 mx-auto">
                    <div
                        className="rounded-md hover:text-white hover:bg-black/70 px-4 py-2 text-stone-900 font-semibold"
                        size="medium"><Link href={"/"} >Home</Link>
                    </div>
                    {/*<div*/}
                    {/*    className="rounded-md hover:text-white hover:bg-black/70 px-4 py-2 text-stone-900 font-semibold"*/}
                    {/*    size="medium"><Link href={"#chatbox"}>Chatbox</Link>*/}
                    {/*</div>*/}
                    <div
                        className="rounded-md hover:text-white hover:bg-black/70 px-4 py-2 text-smx-autotone-900 font-semibold"
                        size="medium"><Link href={"#learn"}>learn</Link>
                    </div>
                </div>
            </div>
            <div className="h-fit bg-stone-100 text-center  py-36 w-full px-3 lg:px-36">
                <p className="w-full font-sans font-bold pb-16 text-stone-900 mx-auto text-6xl  tracking-wide items-center h-full">{title}</p>

                <div className="min-h-screen p-6 lg:p-20 py-28 bg-stone-800 mb-32 rounded-2xl w-full mx-auto " >
                    <div className="min-h-screen bg-stone-900 rounded-2xl w-full mx-auto"
                         style={styles}
                    >
                        {/*<p className="text-white">Param1: {param1}</p>*/}
                        {/*<Image src={ImageLink} alt={"oops image not found"}  width={500} height={500}  />*/}
                        {/*<p className="text-white">{ImageLink}</p>*/}
                    </div>
                </div>
                <div className="text-justify">
                    <p className="w-full font-mono  pb-16 text-stone-900 mx-auto text-xl  tracking-wide items-center h-full">{des}</p>
                </div>
                <div className="min-h-screen">
                    <Quiz index={param1}/>
                </div>
                {/*<div className="h-screen bg-stone-900 rounded-2xl w-full mx-auto ">*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
