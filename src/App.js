//import pakages
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import styled from "styled-components";
import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";
import { async } from "@firebase/util";
import { useDispatch } from "react-redux";

//import components
import Add from "./Add";
import WordList from "./WordList";
import Change from "./Change";
import { loadWordFB } from "./redux/modules/word";


function App() {
  // const word = collection(db, "word");
  // React.useEffect (async() => {
  //   const query = await getDocs(word);
  //   console.log(query)
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data())
  //   });
  // }, []);
  const dispatch = useDispatch();
  React.useEffect (() => {
     dispatch(loadWordFB());
  }, []);



  
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path = "/" element = {<WordList/>}/>
          <Route path = "/Add" element = {<Add/>}/>
          <Route path = "/Change/:index" element = {<Change/>}/>
          {/* <Route path = "*" element = {<NotFound/>}/> */}
        </Routes>
      </Container>
      
    </div>
  );
}


const Container = styled.div`
  max-width: 500px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  
`


export default App; 