import React from 'react';
import PropTypes from 'prop-types';
import { Item, Container } from './styled';
import { SliderStyled } from 'styled/'
import _ from 'lodash';
import * as arr from 'utils/arrowSlick';

const FeatureRace = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <arr.NextArrow/>,
        prevArrow: <arr.PrevArrow/>,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    autoplay: true,
                    dots: false
                }
            }
        ]

    };
    const {data} = props;

    return (
        <Container>
            <SliderStyled { ...settings } feature={ true }>
                { !_.isEmpty(data) && data.map((item, key) => {
                    return (
                        <Item key={ key } src={ item.banner_card }/>
                    )
                }) }
            </SliderStyled>
        </Container>
    );
};

FeatureRace.propTypes = {
    data: PropTypes.array.isRequired
};

FeatureRace.defaultProps = {
    data: []
};

export default FeatureRace;
