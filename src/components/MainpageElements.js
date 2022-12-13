import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    
    

    
    
`
export const Title = styled.h1`
        display: flex;
        justify-content: center;
`
export const Form = styled.form`
    
    display: flex;
    justify-content: center;
    margin-top: 60px;
    
`
export const Input = styled.input`
    padding: 15px 15px;
    width: 300px;
    margin-right: 10px;
    border-radius: 25px;
    border: none;
    @media (max-width:480px){
        width: 200px;
    }


    
`
export const Button = styled.button`
    padding:15px 25px;
    background: #8E2DE2;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4A00E0, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border: none;
    border-radius: 25px;
    cursor: pointer;
    color: #fff;
`
export const ConP = styled.p`
    display: flex;
    justify-content: center;
    color: red;
    font-weight: bold;
`