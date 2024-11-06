import React from "react";
import PropTypes from "prop-types";


const shapes = {
    round: "rounded" ,


};

const variants = {
    tarOutlineGray300: "!border-gray-300 border border-solid bg-gray-50",
};

const sizes = {
    xs: "h-[200px] p-5 text-[16px]",
};

const TextArea = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            shapes,
            size = "xs",
            variant = "torOutineGray300",
            onChange,
            ...restprops
        },
        ref,
    )=>{
        const handlechange = (e) =>{
            if (onChange) onChange(e?.target?.value);
        };
        return(
            <textarea
            ref={ref} 
            className={'${className} ${shapes && shapes[shape]} $size {size && sizes[size]} $variant && variants[variant]'}
            name={name}
            onChange={handlechange}
            placeholder={palaceholder}
            {...restProps}

            />
        );
    },
);


TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: propTypes.oneOf(["tarOutlineGray300"]),


};
export { TextArea };