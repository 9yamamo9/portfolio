import {AppBar, AppBarProps, Toolbar, Typography} from '@mui/material';

export const PortfolioAppBar = (props: AppBarProps & {pageTitle: string}) => {
  return (
    <AppBar position='static' color='primary' variant='outlined'>
      <Toolbar>
        <Typography variant='h3'>
          {props.pageTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}