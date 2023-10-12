import React from 'react'
import SideBar from '../../components/organisms/SideBar';
import Typography from '../../components/atoms/Typography';
import { Stack } from '@mui/material';

 const UserPage=()=> {
  return (
    <div>
       <SideBar/>
        <Stack   alignItems={"center"}> 
            <Typography variant='h2'>{"inside the  userPage "}</Typography> 
        </Stack>
    </div>
  )
}


export default UserPage;