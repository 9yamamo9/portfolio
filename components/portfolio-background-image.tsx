import Image from 'next/image';
import {Box} from '@mui/material';

export const PortfolioBackgroundImage = () => {
  return (
    <Box sx={{ position: 'relative', width: 'auto', height: 1000}}>
      <Image
        layout='fill'
        src='/sunny.jpg'
        objectFit='cover'
        priority={true}
      />
    </Box>
  )
}