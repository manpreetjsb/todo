import React from 'react'

import AddTodo from './components/AddTodo/AddTodo'
import Typography from '@material-ui/core/Typography'
import ListView from './components/LsitView/ListView'

const App: React.FC = () => {
  return (
    <div>
      <header>
        <Typography align='center' variant='h3' component='h3'>
          TODO LIST
        </Typography>
      </header>
      <AddTodo />
      <ListView />
    </div>
  )
}

export default App
