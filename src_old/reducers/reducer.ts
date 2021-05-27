import { Store, Todo } from '../components/types/types'
import { ADD_TODO, ActionTypes, SET_NEWTODO } from '../components/action/action'

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    complete: false,
  },
]

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
    default:
      return state
  }
}
export default reducer
