import {AppBar, AppBarProps, IconButton, Toolbar, Typography} from '@mui/material';
import {Feed, GitHub, Person, Twitter} from '@mui/icons-material';

export const PortfolioAppBar = (props: AppBarProps & { pageTitle: string }) => {
  return (
    <AppBar
      position='static'
      variant='outlined'
      sx={{backgroundColor: 'white'}}
    >
      <Toolbar>
        <Typography
          variant='h3'
          color='black'
          sx={{flexGrow: 1}}
        >
          {props.pageTitle}
        </Typography>
        <IconButton size='large'>
          <Person/>
        </IconButton>
        <IconButton size='large' href='https://twitter.com/9yamamo9'>
          <Twitter/>
        </IconButton>
        <IconButton size='large' href='https://github.com/9yamamo9'>
          <GitHub/>
        </IconButton>
        <IconButton size='large' href='https://ymmryt.hatenablog.com/'>
          <Feed/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}