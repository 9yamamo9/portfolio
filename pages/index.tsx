import Head from 'next/head'
import {Container, Stack, Typography} from '@mui/material'
import {PortfolioAppBar} from '../components/portfolio-app-bar'
import {PortfolioAvatar} from '../components/portfolio-avatar';

const Home = () => {
  return (
    <Stack direction='column' alignItems='center'>
      <Head>
        <title>Yuta Yamamori Portfolio</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/yamamori_rice.jpg"/>
      </Head>
      <PortfolioAppBar pageTitle='' />
      <Typography variant='h1'>
        Welcome!
      </Typography>
      <PortfolioAvatar />
    </Stack>
  )
}

export default Home
