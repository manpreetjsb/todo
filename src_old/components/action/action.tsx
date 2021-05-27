export const ADD_TODO = 'ADD_TODO'
export const SET_NEWTODO = 'SET_NEWTODO'

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof SET_NEWTODO; payload: string }

export const addTodo = (): ActionTypes => ({ type: ADD_TODO })

export const setNewTodo = (text: string): ActionTypes => ({
  type: SET_NEWTODO,
  payload: text,
})
