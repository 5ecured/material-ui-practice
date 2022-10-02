import React from 'react'
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' color='textPrimary' align='center' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone, I am trying to practice my Material UI. This is just a test to make this sentence long to see how it looks like on the screen, you know?
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={5} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Browse more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map(el => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image='https://source.unsplash.com/random'
                    title='Image title'
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant='h5'>
                      Image
                    </Typography>
                    <Typography>
                      Beautiful image thanks to Unsplash
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View more</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant='h6' gutterBottom align='center'>
          Footer
        </Typography>
        <Typography variant='subtitle1' gutterBottom align='center'>
          Material UI practice
        </Typography>
      </footer>
    </>
  )
}

export default App