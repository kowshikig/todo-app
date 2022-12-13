import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    justify-content: center;
    
    
`
export const ConP = styled.p`
    width:420px;
    padding:15px;
    background-color: #000;
    color:#fff;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    
    @media (max-width:480px){
        width:320px;
    }

`
export const Icon = styled.div`
    
    width:30px;
    cursor: pointer;
    
`