import React from "react";
import CustomButton from ".";
import { Meta, StoryFn } from "@storybook/react";



export default{
    title:"atoms/Button",
    component:CustomButton
}as Meta<typeof CustomButton>

const Template: StoryFn<typeof CustomButton>=(args)=><CustomButton {...args}/>

export const button=Template.bind({})

button.args={
    text:"sign in",
    variant:"contained", 
}