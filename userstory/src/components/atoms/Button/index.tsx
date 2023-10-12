import { Button  } from "@mui/material";
import React from "react";

interface ButtonProps {
    text:string;
    variant: 'outlined' | 'contained';
    onClick?:()=>void;  
}

const CustomButton=(props:ButtonProps)=>{
    return(
        <Button  onClick={props.onClick} variant={props.variant} >{props.text}</Button>
    )
}

export default CustomButton;