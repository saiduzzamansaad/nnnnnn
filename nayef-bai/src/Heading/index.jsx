import React, { Children } from "react";
 


const size = {
    headingxs: "text-[14px] font-semibold",
    headings: "text-[16px] font-semibold",
    headingmd: "text-[40px] font-bold md:text-[38px] sm-text-[36px]",
    headinglg: "text-[64px] font-bold md:text-[48px] ",
 };
 const Heading =  ({ Children, className = "",size = "headinglg", ...restProps}) => {
    const Component = as || "h6";

    return(
        <Component className={'text-white-a700 font-manrope ${className} ${sizes[size]}'} {...restProps}>
            {Children}

        </Component>
    );
 };

 export { Heading };
