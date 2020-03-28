import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled';
import { SliderStyled } from "styled";
import EventItem from '../EventItem'
import _ from "lodash";
import * as arr from 'utils/arrowSlick';

const EventSection = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <arr.NextArrow/>,
        prevArrow: <arr.PrevArrow/>,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    const {data} = props;

    return (
        <Wrapper>
            <h3>{ props.title }</h3>
            <SliderStyled { ...settings } feature={ false }>
                { !_.isEmpty(data) && data.map((item, key) => <EventItem key={ key } data={ item } card={ true }/>) }
            </SliderStyled>
        </Wrapper>
    );
};

EventSection.propTypes = {
    data: PropTypes.array.isRequired
};

EventSection.defaultProps = {
    data: []
};

export default EventSection;
