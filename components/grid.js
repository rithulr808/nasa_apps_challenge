'use client'

import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from "./card";
import styles from "./css/Grid.module.css"
import clsx from "clsx";
import {useEffect, useState} from "react";
import Link from "next/link";


export default function DisplayGrid() {
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex flex-col px-24 p-2 py-16 my-48">
            <Grid container spacing={{ xs: 3, md: 12 }} columns={{ xs: 4, sm: 8, lg: 12 }}>
                {Array.from(Array(3)).map((_, index) => (
                    <Grid xs={4} sm={4} lg={4} key={index}>
                        <Link href={`/topic/${index+1}?param1=${index}`}>
                            <div className={
                                clsx([
                                    "bg-stone-200 h-[800px] rounded-2xl p-2",
                                    "hover:cursor-pointer hover:opacity-0.5",
                                ])}
                            >
                                <MediaCard/>
                            </div>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}