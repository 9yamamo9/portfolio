import Image from 'next/image';

export const PortfolioBackgroundImage = () => {
  return (
    <Image
      width={2000}
      height={1000}
      src='/sunny.jpg'
      objectFit='cover'
      priority={true}
    />
  )
}