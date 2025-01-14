import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './todos-constans'



export const todoList = (state = [], action) => {
  let todoIdNumber = state.length > 0 ? state[state.length - 1].id : 0

  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: ++todoIdNumber, //лучше напиши утилиту для формирования рандомной строчки в качестве айди или подключи либу
          title: action.title,
          completed: false
        }
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed
            }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};