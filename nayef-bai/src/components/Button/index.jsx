import React, { Children } from 'react';
import PropTypes from 'prop-type'


const shapes = {
    square: "rounded-[0px]",
    round:  "rounded",


};
const variants = {

    fill: {
        gray_200: "bg-gray text-gray-500",
        blue_gray_100: "bg-blue_gray-100 text-blue-900",
        teal_600: "bg-teal-600",
        red_A700: "bg-red a700 text-white-a700",
        blue_900: "bg-blue-900 text-white-a900",

    },

};

const size = {
    md: "h-[66px] px-1.5",
    lg: "h-[70px] px-[34px] text-[16px]",
    sm: "h-[50px] px-5 text-[16px]",
    xs: "h-[40px] px-[18px] text-[16px]",
};

const Button = ({  
    Children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variants = "fill",
    size = "xs",
    color = "blue_900",
    ...restProps

}) => {
    return(
        <button
            className={'$ {className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}'}
            {...restProps}
        >
            {!! leftIcon && leftIcon}
            {Children}
            {!! rightIcon && rightIcon}

        </button>
    );
};

Button.PropTypes = {
   className: PropTypes.string,
   Children: PropTypes.node,
   leftIcon: PropTypes.node,
   rightIcon: PropTypes.node,
   shape: PropTypes.oneOf(["square", "round"]),
   size: PropTypes.oneOf(["md","lg","sm","xs"]),
   variants: PropTypes.oneOf(["fill"]),
   color: PropTypes.oneOf(["gray_200", "blue_gray_100", "teal_600", "red_a700", "blue_900"]),

};
export {Button}