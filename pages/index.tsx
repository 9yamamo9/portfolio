import type {NextPage} from 'next'
import Head from 'next/head'
import {Container, Stack, Typography} from '@mui/material';

const Home: NextPage = () => {
  return (
    <Stack>
      <Head>
        <title>Yuta Yamamori Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant='h1'>
        Welcome!
      </Typography>
    </Stack>
  )
}

export default Home
