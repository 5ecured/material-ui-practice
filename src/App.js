import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { red, green } from '@mui/material/colors'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth='sm'>
            <Typography variant='h2' color='textPrimary' align='center' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, I am trying to practice my Material UI. This is just a test to make this sentence long to see how it looks like on the screen, you know?
            </Typography>
            <div>
              <Grid container spacing={5} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    See photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App