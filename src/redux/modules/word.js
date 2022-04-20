// word.js
import {db} from "../../firebase";
import { collection, getDoc, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { async } from "@firebase/util";
//initial State
const initialState = {
  list: []
};

// Actions
const LOAD   = 'word/LOAD';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';
const REMOVE = 'word/REMOVE'; 
// const REMOVE = 'my-app/widgets/REMOVE';

// Action Creators
export function loadWord(word_list) {
  return { type: LOAD, word_list: word_list };
}

export function createWord(list) {
  return { type: CREATE, list: list };
}

export function updateWord(list, index) {
  return { type: UPDATE, list: list, index: index };
}

export function removeWord(index) {
  return { type: REMOVE, index: index };
}

//middlewares
export const loadWordFB = () => {
  return async function(dispatch) {
    const word_data = await getDocs(collection(db, "word"));

    let word_list = [];

    word_data.forEach((doc) => {
      word_list.push({...doc.data(), id: doc.id});
    });

    dispatch(loadWord(word_list));
  }

}

export const addWordFB = (word) => {
  return async function(dispatch){
    const docRef = await addDoc(collection(db, "word"), word);
    // console.log((await getDoc(docRef)).data());
    const _word = await getDoc(docRef);
    const word_data = {id: _word.id, ..._word.data()};
    // console.log(word_data);
    dispatch(createWord(word_data));
  }
}

export const updateWordFB = (word_id, word_list, index) => {
  
  return async function (dispatch){
    const docRef = await doc(db, "word", word_id);
    await updateDoc(docRef, word_list)
    // 파이어베이스에 업데이트
    //{word: word...}   {word: text}
    
    dispatch(updateWord(word_list, index));

  }
}

export const removeWordFB = (word_id, index) => {

  return async function (dispatch){
    const docRef = await doc(db, "word", word_id);
    await deleteDoc(docRef);
  
    dispatch(removeWord(index));
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD: {

      return {
        list: action.word_list
      };
    }

    case CREATE: {

      const new_word_list = [...state.list, action.list]

      return { ...state, list: new_word_list } //바꿔준다

    }

    case UPDATE: {

      const new_word_list = state.list.map((l, idx) => {
        if (parseInt(action.index) === idx) {
          return { ...l, ...action.list };
        } else {
          return l;
        }
      });
      return { ...state, list: new_word_list }

    }


    case REMOVE: {
      const index = action.index; 
      const new_word_list = state.list.filter((item, i) => i !== index);
      return { list: new_word_list };
    }

    default: return state;
  }

  
}


