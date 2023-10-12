import React from 'react'; 
 
import { Meta, StoryFn } from '@storybook/react';
 
import SideBar from '.';

export default{
    title:"sidebar",
    component:SideBar
}as Meta<typeof SideBar>


const Template : StoryFn<typeof SideBar>=( )=><SideBar />


export const homeIcon=Template.bind({})

homeIcon.args={
   
}