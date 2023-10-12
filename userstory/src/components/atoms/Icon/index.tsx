 
import React from "react";


interface IconProps{
    src:string;
    alt:string;
    sx?:any
}


const Icon=(props:IconProps)=>{
    return <img src={props.src} alt={props.alt} style={props.sx}/>
}

export default Icon;