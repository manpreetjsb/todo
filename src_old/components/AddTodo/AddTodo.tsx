import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Box from '@material-ui/core/Box'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from '../types/types'
import { addTodo, setNewTodo } from '../action/action'

const AddTodo: React.FC = () => {
  /*   const [text, setText] = useState('')
  const addTask = () => {
    //dispatch =
    return console.log(text)
    setText('')
  } */
  const newTodo = useSelector((state: Store) => state.newTodo)
  const dispatch = useDispatch()

  return (
    <Box display='flex' justifyContent='center' width={1}>
      <Grid item sm={5}>
        <FormGroup>
          <Box my={2}>
            <TextField
              fullWidth
              name='TodoText'
              label='TodoText'
              variant='outlined'
              placeholder='New todo'
              value={newTodo}
              onChange={(event) => {
                dispatch(setNewTodo(event.target.value))
              }}
            />
          </Box>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={() => {
              dispatch(addTodo())
            }}
            startIcon={<SaveIcon />}
          >
            Add Todo
          </Button>
        </FormGroup>
      </Grid>
    </Box>
  )
}
export default AddTodo
