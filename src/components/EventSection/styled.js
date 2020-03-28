import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 24px 0;
    border-top: 1px solid #e6e6e6;
    
    h3{
        font-size: 20px;
        color: #333;
        margin-bottom: 16px;
        text-transform: lowercase;
        font-weight: bold;
        
        &:first-letter{
            text-transform: capitalize;
        }
    }
    
    @media screen and (min-width: 992px){
        .slick-slide{
            &:nth-child(odd){
                padding-right: 16px;
            }
            &:nth-child(even){
                padding-left: 16px;
            }
        }
    }
`;