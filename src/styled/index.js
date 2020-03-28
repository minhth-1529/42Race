import styled from "styled-components";
import Slider from "react-slick";

export const SliderStyled = styled(Slider)`
    .slick-dots{
        margin: 0;
        padding: 24px 0;
        position: absolute;
        bottom: 2px;
        width: 100%;
        text-align: center;
        
        li {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 24px;
            
            button{
                cursor: pointer;
                border: 0;
                font-size: 0;
                border-radius: 100%;
                background-color: rgba(255,255,255,0.3);
                opacity: 1;
                box-shadow: none;
                width: 12px;
                height: 12px;
                transition: all 0.3s ease-in-out;
                outline: none;
                padding: 6px;
            }
            
            &.slick-active{
                button{
                    background-color: #fff;
                    width: 14px;
                    height: 14px;
                }
            }
        }
    }
    &&{
        .slick-arrow{
            opacity: 1;
            width: 40px;
            height: 40px;
            background-color: rgba(238, 238, 238, 0.8);
            color: #000;
            border-radius: 100%;
            top: ${props=>props.feature === true ? '50%' : '65px'};
            transform: translateY(${props=>props.feature === true ? '-50%' : '0'});
            position: absolute;
            cursor: pointer;
            z-index: 1;
            transition: all 0.2s ease-in-out;
            outline: none;
            border: 0;
            
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            
            &:hover{
                background-color: rgba(238, 238, 238, 1);
            }
            
            &:before{
                margin: 0;
                border: 0;
                font-size: 28px;
            }
            
            &.slick-next{
                right: ${props=>props.feature === true ? '98px' : '0'};
                margin-right: ${props=>props.feature === true ? '0' : '-20px'};
                box-shadow: 3px 3px 3px 0 rgba(0,0,0,0.35);
            }
            &.slick-prev{
                left: ${props=>props.feature === true ? '98px' : '0'};
                margin-left: ${props=>props.feature === true ? '0' : '-20px'};
                box-shadow: -2px 2px 3px 0 rgba(0,0,0,0.35);
            }
            
            @media screen and (max-width: 991px){
                display: none;
            }
        }
    }
`;

export const BoxRaceContainer = styled.div`
    max-width: 840px;
    margin: 0 auto 0 auto;
    padding: 0 8px;
    
    .race-heading{
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 0;
        
        @media screen and (max-width: 639px){
            font-size: 16px;
        }
    }
`;

export const Main = styled.main`
     padding-top: 57px;
`;