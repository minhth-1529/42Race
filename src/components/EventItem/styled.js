import styled from 'styled-components';

export const Item = styled.div`
    &.grid{
        display: block;
        
        .race{
            &-thumb{
                padding-bottom: 170px;
            }
            &-title{
                padding-top: 8px;
            }
        }
    }
    &.list{
        display: flex;
        padding: 16px 0;
        
        .race{
            &-thumb{
                max-width: 336px;
                min-width: 336px;
                height: 150px;
                transition: all 0.1s ease-in-out;
                
                @media screen and (min-width: 640px){
                    margin-right: 16px;
                }
                
                @media screen and (max-width: 639px){
                    margin-bottom: 8px;
                    height: auto;
                    padding-bottom: 45%;
                    max-width: none;
                    min-width: auto;
                }
            }
        }
        
        @media screen and (max-width: 639px){
            flex-direction: column;
        }
    }
    
    &.medal-view{
        @media screen and (max-width: 639px){
            flex-direction: row;
        }
        .race{
            &-thumb{
                max-width: 84px;
                min-width: 84px;
                height: 84px;
                margin-right: 8px;
                padding-bottom: 0;
            }
            &-title{
                font-size: 14px;
            }
            &-date{
                font-size: 12px;
            }
            &-tags{
                li{
                    div{
                        padding: 3px 6px;
                        font-size: 10px;
                    }
                }
            }
        }
    }
    
    .race{
        &-thumb{
            background-image: url(${ props => props.src });
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 12px;
            position: relative;
            
            .event-red-tag{
                position: absolute;
                background: #eb3d49;
                border-radius: 24px;
                font-size: 11px;
                line-height: 14px;
                color: #fff;
                padding: 5px 10px;
                top: 8px;
                right: 8px;
                opacity: .9;
                text-transform: uppercase;
                font-weight: 700;
            }
        }
        &-title{
            color: #333;
            font-weight: bold;
            font-size: 16px;
            margin: 0;
        }
        &-date{
            margin: 0;
        }
        &-tags{
            overflow: hidden;
            margin-top: 6px;
            
            ul{
                margin: -2px;
                display: flex;
                flex-wrap: wrap;
            }
            li{
                padding: 2px;
                
                div{
                    border: 1px solid #e6e6e6;
                    box-sizing: border-box;
                    border-radius: 32px;
                    padding: 6px 9px;
                    display: inline-block;
                    font-size: 12px;
                    line-height: 16px;
                    align-items: center;
                    text-align: center;
                    color: #333;
                    
                    &:first-letter{
                        text-transform: capitalize;
                    }
                }
            }
        }
    }
`;