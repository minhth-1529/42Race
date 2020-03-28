import styled from 'styled-components';
import { Modal } from 'antd';

export const Wrapper = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: #fff;
`;

export const WrapperInner = styled.div`
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`;

export const Bell = styled.div`
    a{
        color: #141414;
        padding: 16px;
        display: inline-block;
        margin-left: -18px;
        font-size: 16px;
    }
`;

export const Heading = styled.div`
    h1{
        margin: 0;
        font-size: 16px;
        font-weight: 700;
        color: #212b36;
    }
`;

export const Hamburger = styled.div`
    span{
        cursor: pointer;
        padding: 16px;
        font-size: 16px;
        
        @media screen and (min-width: 992px){
            margin-right: -18px;
        }
    }
`;

export const ModalStyled = styled(Modal)`
    .item{
        font-weight: 600;
        color: #141414;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 15px;
        cursor: pointer;
        background-color: transparent;
        transition: all 0.2s ease-in-out;
        padding: 18px 12px;
        
        &.lang{
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }
        
        &:hover{
            background-color: #eee;
        }
    }
    
    .text,.icon{
        display: inline-flex;
        align-items: center;
    }
    
    .text{
        svg{
            font-size: 26px;
            margin-right: 12px;
        }
    }
    
    .icon{
        font-size: 18px;
        justify-content: center;
    }
    
    &&&&{
        .ant-select-selector{
            border: 0 !important;
            outline: none;
            background-color: transparent;
            box-shadow: none;
        }
    }
`;