import React from "react";
import PropTypes, { shape } from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round:  "rounded",


};
const variants = {

    fill: {
        gray_50: "bg-gray-50 text-gray-500",
        red_A700: "bg-red a700 text-white-a700",
        blue_900: "bg-blue-900 text-white-a900",

    },

    undeline:{
        blue_900: "bg-blue-900 border-b border-blue-900 border-solid",
    },

};

const size = {
    md: "h-[50px] px-2 text-[16px]",
    sm: "h-[38px] px-[18px] text-[16px]",
    xs: "h-[32px] px-3 text-[16px]",
};

const Input = React.forwardRef(
    (
        {
        className = "" ,
        name = "",
        placeholder = "",
        type = "text",
        label = "",
        prefix,
        suffix,
        onChange,
        shape,
        variant= "fill",
        size = "md",
        color = "gray_50",
        ...restProps

        },

        ref,



    )=>{
        return(
            <label
            className={'$ {className} flex items-center justify-center cursor-text tracking-[-0.32px text-16px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]} || variant[variant])} $(size && size[size])}'}
            >
            {!!label && label }
            {!! prefix && prefix}
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps}/>
            {!!suffix && suffix}
            </label>
        );
    },
);


Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["sm", "xs", "md"]),
    variant: PropTypes.oneOf(["fill","underline"]),
    color: PropTypes.oneOf(["red_A700", "gray_50", "blue_900"]),
    


};

export { Input };