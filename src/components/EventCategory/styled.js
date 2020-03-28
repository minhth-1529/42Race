import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-bottom: 32px;
    
    h2{
        font-size: 32px;
        margin-bottom: 16px;
        margin-top: 0;
    }
    
    ul{
        margin: 0 -6px;
        display: flex;
        
        li{
            padding: 0 6px;
            
            .inner-item{
                cursor: pointer;
                border-radius: 12px;
                width: 140px;
                height: 116px;
                position: relative;
                background-size: 60%;
                background-repeat: no-repeat;
                background-position: right center;
                
                @media screen and (max-width: 639px){
                    width: 28.14vw;
                    height: 26vw;
                }
                
                p{
                    font-weight: bold;
                    color: #fff;
                    position:absolute;
                    margin: 0;
                    padding: 0;
                    top: 20px;
                    left: 18px;
                    
                    @media screen and (max-width: 639px){
                        top: 8px;
                        left: 8px;
                    }
                }
                
                &.running{
                    background-color: rgb(8, 191, 169);
                }
                &.cycling{
                    background-color: rgb(58, 183, 240);
                    background-size: 49%;
                }
                &.walking{
                    background-color: rgb(255, 112, 67);
                }
            }
        }
    }
`

export const WrapperInner = styled.div`
    overflow: hidden;
`