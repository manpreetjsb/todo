import React from 'react'
import Box from '@material-ui/core/Box'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '../types/types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import { toggelTodo, deleteTodo } from '../action/action'

const CompletedList: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: Store) => state.todos)

  return (
    <Box width={1}>
      {todos.map((item) => {
        if (item.complete === true) {
          return (
            <Grid key={item.id}>
              <IconButton
                aria-label='delete'
                onClick={() => {
                  dispatch(deleteTodo(item.id))
                }}
              >
                <DeleteIcon fontSize='small' />
              </IconButton>
              <FormControlLabel
                control={<Checkbox name='completed' />}
                label={item.text}
                color='primary'
                value={item.id}
                checked={item.complete}
                onChange={() => {
                  dispatch(toggelTodo(item.id))
                }}
              />
            </Grid>
          )
        }
      })}
    </Box>
  )
}
export default CompletedList
