//import pakages
import React from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import { createWord, updateFB, updateWord, updateWordFB } from "./redux/modules/word";
//import components

const Change = (props) => {
    const text = React.useRef(null);
    const explanation = React.useRef(null);
    const example = React.useRef(null);
    const dispatch = useDispatch();
    const word_list = useSelector((state) => state.word.list);
    const params = useParams();
    const word_index = params.index;


    const navigate = useNavigate();
    
    React.useEffect (() => {
        text.current.value = word_list[word_index].word;
        explanation.current.value = word_list[word_index].explanation;
        example.current.value = word_list[word_index].example;
    }, []);

    return (
        <>
            <Title>수정하기</Title>
            <ItemBox>
                <Item>
                    <ItemWord>
                        <ItemTitle>단어</ItemTitle>
                        <input  type = "text" ref = {text}/>
                        <ItemTitle>설명</ItemTitle>
                        <input type = "textarea" ref = {explanation}/>
                        <ItemTitle>예시</ItemTitle>
                        <input type = "textarea" ref = {example}/>
                    </ItemWord> 
                </Item>
            </ItemBox>
            <button onClick={() => {
                const send_data =  {word: text.current.value, explanation: explanation.current.value, example: example.current.value}
                // dispatch(updateWord(send_data, word_index));
                dispatch(updateWordFB(word_list[word_index].id, send_data, word_index));
                // console.log(send_data)
                navigate(-1)
            }}>수정</button>
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
export default Change;