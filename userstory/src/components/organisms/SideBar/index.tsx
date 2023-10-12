import { Box, Stack  } from "@mui/material";
import React from "react";
import IconTypo from "../../moleclues/IconTypo"; 
import Vector from "../../../Images/assets/icons/Vector.svg"
import Home from "../../../Images/assets/icons/users.svg" 
  
const SideBar=( )=>{  
    return(
        < Box flexDirection={'column'} height={"70vh"} sx={{backgroundColor:'black'}} width={'90px'} position={"fixed"}> 
            <Stack direction={"column"} spacing={'30px'} paddingLeft={'6px'}>
            <IconTypo label={"User"} src={Home} alt={"Home"}  to="/" />
            <IconTypo label={"Files"} src={Vector} alt={"Home"} to="/users"/>
            </Stack>
        </ Box>
    )
}

export default SideBar;