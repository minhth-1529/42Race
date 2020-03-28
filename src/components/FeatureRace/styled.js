import styled from 'styled-components';

export const Container = styled.div`
    .slick-list{
        height: auto;
        line-height: normal;
    }
`;


export const Item = styled.div`
    background-image: url(${ props => props.src });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 524px;
    
    @media screen and (max-width: 991px){
        padding-bottom: 45%;
    }
`;