import styled from "styled-components";

export const Item = styled.div`
    display: flex;
`;

export const Price = styled.p`
    text-align: center;
    display: inline-block;
    float: right;
    margin-right: 15px;
`;

export const Button = styled.button`
    margin: auto;
    display: inline-block;
    float: right;
    padding: 10px 30px;
    background-color: red;
    border: 5px solid red;
    border-radius: 30px;
    color: white;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: palevioletred;
        border-color: palevioletred;
    }
`;
