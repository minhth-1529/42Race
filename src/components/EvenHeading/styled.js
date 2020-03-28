import styled from 'styled-components';

export const RaceHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 16px;
    margin-bottom: 16px;
    
    & > div{
        display: flex;
        align-items: center;
        
        strong{
            margin-right: 8px;
        }
    }
`;