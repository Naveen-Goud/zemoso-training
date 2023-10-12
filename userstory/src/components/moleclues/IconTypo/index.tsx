import { Box, iconButtonClasses, styled } from "@mui/material";
import React from "react";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import { useNavigate } from "react-router-dom";


interface IconTypoProps{
    label:string;
    src:string;
    alt:string;
    to:string;

}

const StyledBox=styled(Box)`
width:24px;
height:20px;
`
 
const IconTypo=(props:IconTypoProps)=>{
    const Navigate = useNavigate();  
    const handleClick = () => {
        Navigate(props.to);  
    };
    return(
        <StyledBox onClick={handleClick}> 
            <Icon src={props.src} alt={props.alt}/> 
            <Typography children={props.label} sx={{color:'white'}}/>
        </StyledBox>

    )
}

export default IconTypo;