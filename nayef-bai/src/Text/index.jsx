import React, { Children } from "react";

const sizes = {
    textxs: "text-[14px] font-normal not-itaic",
    texts: "text-[16px] font-normal not-itaic",
    textmd: "text-[20px] font-normal not-itaic",
    textlg: "text-[24px] font-normal not-itaic md:text-[22px]",
};

const Text = ({children, className = "", as, size ="texts" , ...restProps}) =>{
    const Component = as || "p";
    
    
    return (
        <Component className= {'text-black-900 font-manrope ${className} ${sizes[size]'} {...restProps}>
            {children}

        </Component>

    );
};

export { Text };