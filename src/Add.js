//import pakages
import React from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { addWordFB, createWord } from "./redux/modules/word";
//import components

const Add = (props) => {
    const text = React.useRef(null);
    const explanation = React.useRef(null);
    const example = React.useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <>
            <Title>추가하기</Title>
            <ItemBox>
                <Item>
                    <ItemWord>
                        <ItemTitle>단어</ItemTitle>
                        <input type = "text" ref = {text}/>
                        <ItemTitle>설명</ItemTitle>
                        <input type = "textarea" ref = {explanation}/>
                        <ItemTitle>예시</ItemTitle>
                        <input type = "textarea" ref = {example}/>
                    </ItemWord> 
                </Item>
            </ItemBox>
            <button onClick={() => {
                // dispatch(createWord({text: text.current.value, explanation: explanation.current.value, example: example.current.value}))
                dispatch(addWordFB({word: text.current.value, explanation: explanation.current.value, example: example.current.value}))
                navigate(-1);
            }}>추가</button>
        </>
    )
    
    
    
}

const Title = styled.h1``;

const ItemBox = styled.div`
background-color: #fff;
width: 100%;
padding: 5px;
box-sizing: border-box;
margin: 15px 0;
position: relative;
`;

const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
&:nth-child(odd) {margin: 20px 0;}
`;

const ItemTitle = styled.div`
font-size: 0.8rem;
text-decoration: underline;
`;
const ItemWord = styled.div`
font-size: 1.1rem;
color: ${(props) => (props.color ? "blue" : "black")};
`;
export default Add;