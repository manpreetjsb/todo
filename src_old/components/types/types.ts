export interface Todo {
  id: number
  text: string
  complete: boolean
}

export interface Store {
  todos: Todo[]
  newTodo: string
}
