import React from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

export const NextArrow = (props) => {
    const {onClick} = props;
    return (
        <span className="slick-arrow slick-next">
            <MdChevronRight onClick={ onClick }/>
        </span>
    );
};

export const PrevArrow = (props) => {
    const {onClick} = props;
    return (
        <span className="slick-arrow slick-prev">
            <MdChevronLeft onClick={ onClick }/>
        </span>
    );
};