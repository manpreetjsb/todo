import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import CompletedList from '../CompletedList/CompletedList'
import IncompletedList from '../IncompletedList/IncompletedList'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const ListView: React.FC = () => {
  return (
    <Box my={5} alignItems='center' justifyContent='center' display='flex'>
      <Grid container spacing={3} item sm={10} justify='center'>
        <Grid item xs={6}>
          <Typography component='h5' variant='h5'>
            Incompleted Todo List
          </Typography>
          <Paper>
            <Box p={2}>
              <IncompletedList />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography component='h5' variant='h5'>
            Completed Todo List
          </Typography>
          <Paper>
            <Box p={2}>
              <CompletedList />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ListView
