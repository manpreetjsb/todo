export const ADD_TODO = 'ADD_TODO'
export const SET_NEWTODO = 'SET_NEWTODO'
export const TOGGEL_TODO = 'TOGGEL_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof SET_NEWTODO; payload: string }
  | { type: typeof TOGGEL_TODO; payload: number }
  | { type: typeof DELETE_TODO; payload: number }

export const addTodo = (): ActionTypes => ({ type: ADD_TODO })

export const setNewTodo = (text: string): ActionTypes => ({
  type: SET_NEWTODO,
  payload: text,
})

export const toggelTodo = (id: number): ActionTypes => ({
  type: TOGGEL_TODO,
  payload: id,
})

export const deleteTodo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
})
