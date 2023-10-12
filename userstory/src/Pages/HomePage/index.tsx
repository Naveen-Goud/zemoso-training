import React from 'react'
import SideBar from '../../components/organisms/SideBar';
import { Stack } from '@mui/material';
import Typography from '../../components/atoms/Typography';

  const   HomePage=()=> {
  return (
    <div>
         <SideBar/>
        <Stack   alignItems={"center"}> 
            <Typography variant='h2'>{"inside the home "}</Typography> 
        </Stack>
         
    </div>
  )
}
export default HomePage;