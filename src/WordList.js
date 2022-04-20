//import pakages
import React from "react";
import styled from "styled-components";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeWord, removeWordFB } from "./redux/modules/word";


//import components

const WordList = (props) => {
    const navigate = useNavigate();
    const word_list = useSelector((state) => state.word.list);
    const dispatch = useDispatch();

    console.log(word_list)
    return (
        <>
            <Title> 쏘심플사전 </Title>
            {word_list.map((list, index) => {
                return (
                    <ItemBox>
                        <Item>
                            <ItemWord>
                                <ItemTitle>단어</ItemTitle>
                                {list.word}
                                <ItemTitle>설명</ItemTitle>
                                {list.explanation}
                                <ItemTitle>예시</ItemTitle>
                                {list.example}
                            </ItemWord>
                            <button onClick={() => {
                                navigate("/Change/" + index);
                            }}>수정하기</button>
                            <button onClick={() => {
                                // dispatch(removeWord(index));
                                dispatch(removeWordFB(list.id, index))
                            }}>삭제하기</button>
                        </Item>
                    </ItemBox>
                )
            })}
            <button onClick={() => {
                navigate("/Add");
            }}>추가하기</button>
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


export default WordList;