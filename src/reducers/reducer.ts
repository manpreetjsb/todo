import { Store, Todo } from '../components/types/types'
import {
  ActionTypes,
  ADD_TODO,
  SET_NEWTODO,
  TOGGEL_TODO,
  DELETE_TODO,
} from '../components/action/action'

const addTodo = (todos: Todo[], text: string) => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    complete: false,
  },
]

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    complete: todo.id === id ? !todo.complete : todo.complete,
  }))

const DeleteTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id)

const reducer = (
  state: Store = { todos: [], newTodo: '' },
  action: ActionTypes
) => {
  switch (action.type) {
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        newTodo: '',
        todos: addTodo(state.todos, state.newTodo),
      }
    case TOGGEL_TODO:
      return {
        ...state,
        todos: toggleTodo(state.todos, action.payload),
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: DeleteTodo(state.todos, action.payload),
      }
    default:
      return state
  }
}
export default reducer
