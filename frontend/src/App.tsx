import { CircularProgress, Grid } from '@mui/material'
import './App.css'

function App() {

  let postArea:React.ReactNode = <CircularProgress/>

  // if ()

  return (
    <Grid container direction='column' spacing={2}>
      <Grid item container justifyContent='space-between'>
        {/* forma */}
      </Grid>
      <Grid item container direction='column'>
        {postArea}
      </Grid>
    </Grid>
  )
}

export default App
