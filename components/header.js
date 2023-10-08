import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import 'tailwindcss/tailwind.css'

export default function Header() {
    return (
        <div className="flex bg-stone-100 flex-row px-12 py-4">
            <div className="flex-initial px-1 text-3xl my-auto font-bold text-black">
                water.
            </div>
            <div className="flex-auto bg-stone-200 rounded-md mx-2">
                <TextField id="outlined-basic" size="small"  variant="outlined" fullWidth
                   sx={{
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                            borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                            borderColor: "transparent",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "transparent",
                        },
                        }
                }}
                />
            </div>
            <div className="my-auto">
                <Button className="rounded-md text-gray-900 px-2 font-semibold" size="medium">Home</Button>
                <Button className="rounded-md text-gray-900 px-2 font-semibold" size="medium">Work</Button>
                {/*<Button className="bg-gray-900/90 hover:bg-gray-900/80 ml-10 rounded-md text-white px-2 font-semibold" size="medium">Contact</Button>*/}
            </div>
        </div>
    )
}
