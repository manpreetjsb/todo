import React from 'react'
import Box from '@material-ui/core/Box'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '../types/types'

const IncompletedList: React.FC = () => {
  const todos = useSelector((state: Store) => state.todos)
  return (
    <Box width={1}>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </Box>
  )
}
export default IncompletedList
