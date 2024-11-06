import {Heading} from "../../Heading"
import React from "react";


export default function UserProfileHeader({
    headerText = (
        <>
        ব্যক্তিগত
        <br/>
        তথ্য
        </>
    ),
    ...props
}) {
    return(
        <div
           {...props}
           className={'${props.className} flex flex-col items-center justify-center w-[100px] md:w-full rounded[50px] sm:grid'}
        >

            <Heading

              size="headings"
              as="h6"
              className="text-center text-[16px] font-semibold leadind-5 tracking-[-0.32px] text-white-a700"

            
            >
                {headerText}
            </Heading>

        </div>       



    );
}
