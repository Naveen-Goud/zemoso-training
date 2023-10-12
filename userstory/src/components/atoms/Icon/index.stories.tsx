import React from "react";
import Icon from ".";
import { Meta, StoryFn } from "@storybook/react";
import Home from "../../../Images/assets/icons/Vector.svg"

export default{
    title:"atoms/icon",
    component:Icon
}as Meta<typeof Icon>

const Template: StoryFn<typeof Icon>=(args)=><Icon {...args}/>

export const image=Template.bind({})

image.args={
    src: Home,
    alt:"home"
}