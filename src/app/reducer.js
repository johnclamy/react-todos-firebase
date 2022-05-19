import actionType from './action-type'
import {
  getIndexOf,
  getList,
  getListItem,
  replaceItemFrom,
  removeItemFrom
} from "../helper";

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.ADD: {
      const newCounter = state.counter + 1
      const newTodo = {
        id: newCounter,
        text: action.text
      }

      return {
        counter: newCounter,
        todos: [...state.todos, newTodo]
      }
    }

    case actionType.EDIT: {
      const index = getIndexOf(state.todos, action.id);
      const todos = getList(state.todos);
      const todo = getListItem(state.todos, index)

      todo.text = action.text
      replaceItemFrom(todos, index, todo)

      return { counter: state.counter, todos }
    }

    case actionType.REMOVE: {
      const index = getIndexOf(state.todos, action.id);
      const todos = getList(state.todos);
      
      removeItemFrom(todos, index)

      return { counter: state.counter, todos };
    }

    default: return state
  }
}

export default reducer