import {Stack, Typography} from '@mui/material';

export const PortfolioIntroduction = () => {
  return (
    <Stack direction='column' sx={{maxWidth: 480}}>
      <Typography variant='h3'>
        Yuta Yamamori
      </Typography>
      <Typography variant='h6' sx={{color: 'gray'}}>
        SNS界隈では@9yamamo9とか@ymmrytとか
      </Typography>
      <Typography variant='body1'>
        5年以上、Web Applicationの開発に携わってましたが、現在はIT Consultantとして働いています。
        AWS関連(特にServerless Architecture)が比較的得意だと思い込んでいます。
      </Typography>
      <Typography variant='body1'>
        TerraformなどによるInfrastructure as CodeやCI/CD Pipelineの構築から、REST API Backendも開発することができます。
        Frontendについては、React/Next.jsなどを触っていたりしますが、ご覧の通りな感じです。
      </Typography>
    </Stack>
  )
}