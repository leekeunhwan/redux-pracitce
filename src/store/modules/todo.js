import { createAction, handleActions } from "redux-actions";

// Ducks 패턴에 의거하여 액션을 위한 파일, 리듀서를 위한 파일을 하나로 작성

// Actions (액션 정의)
// Ducks 패턴을 사용 할 땐 위와 같이 액션 이름을 지을 때 문자열의 앞부분에 모듈 이름을 넣습니다.
// 이는, 다른 모듈에서 작성하게 될 수도 있는 액션들과 충돌되지 않게 하기 위함입니다.

const POST_TODO = "todo/POST_TODO"; // 작성
const UPDATE_TODO = "todo/UPDATE_TODO"; // 수정
const DELETE_TODO = "todo/DELETE_TODO"; // 삭제
const INPUT_CHANGE = "todo/INPUT_CHANGE"; // 텍스트 입력창 초기화
const COMPLETE_TODO = "todo/COMPLETE_TODO"; // 삭제
const UPDATE_TODO_TOGGLE = "todo/UPDATE_TODO_TOGGLE"; // 수정 기능을 켜는 역할
const UPDATE_INPUT_CHANGE = "todo/UPDATE_INPUT_CHANGE";

let id = 2;

// Action Creators (액션함수 정의)
export const inputChage = createAction(INPUT_CHANGE, text => text);
export const updateTodo = createAction(UPDATE_TODO, (id, updateInput) => ({
  id,
  updateInput
}));
export const postTodo = createAction(POST_TODO, text => ({
  text,
  id: id++
}));
export const deleteTodo = createAction(DELETE_TODO, id => id);

export const completeTodo = createAction(COMPLETE_TODO, id => id);
export const updateTodoToggle = createAction(UPDATE_TODO_TOGGLE, id => id);
export const udpateInputChange = createAction(
  UPDATE_INPUT_CHANGE,
  text => text
);

// Define Initial State (초기상태 정의)

const initialState = {
  input: "",
  updateInput: "",
  todo: [
    {
      id: 0,
      text: "리덕스 공부하기",
      complete: false,
      updateMode: false
    },
    {
      id: 1,
      text: "리액트 네이티브 공부하기",
      complete: false,
      updateMode: false
    }
  ]
};

// Reducer (리듀서 정의)
export default handleActions(
  {
    [INPUT_CHANGE]: (state, action) => ({
      ...state,
      input: action.payload
    }),
    [UPDATE_INPUT_CHANGE]: (state, action) => ({
      ...state,
      updateInput: action.payload
    }),
    [POST_TODO]: (state, action) => ({
      ...state,
      todo: state.todo.concat({
        id: action.payload.id,
        text: action.payload.text,
        complete: false,
        updateMode: false
      })
    }),
    [UPDATE_TODO_TOGGLE]: (state, action) => ({
      ...state,
      todo: state.todo.map(todoItem =>
        todoItem.id === action.payload
          ? { ...todoItem, updateMode: true }
          : todoItem
      )
    }),
    [UPDATE_TODO]: (state, action) => ({
      ...state,
      todo: state.todo.map(todoItem =>
        todoItem.id === action.payload.id
          ? {
              ...todoItem,
              text: action.payload.updateInput,
              updateMode: false
            }
          : todoItem
      )
    }),
    [DELETE_TODO]: (state, action) => ({
      ...state,
      todo: state.todo.filter(todoItem => todoItem.id !== action.payload)
    }),
    [COMPLETE_TODO]: (state, action) => ({
      ...state,
      todo: state.todo.map(todoItem =>
        todoItem.id === action.payload
          ? {
              ...todoItem,
              complete: todoItem.complete === false ? true : false
            }
          : todoItem
      )
    })
  },
  initialState
);
