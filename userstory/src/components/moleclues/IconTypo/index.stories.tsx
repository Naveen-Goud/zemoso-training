import React from 'react';
import IconTypo from '.';
import { Icon } from '@mui/material';
import { Typography } from '@mui/material/styles/createTypography';
import { Meta, StoryFn } from '@storybook/react';

import Home from "../../../../public/assets/icons/users.svg"

export default{
    title:"moleclues/IconTypo",
    component:IconTypo
}as Meta<typeof IconTypo>


const Template : StoryFn<typeof IconTypo>=(args)=><IconTypo {...args}/>


export const homeIcon=Template.bind({})

homeIcon.args={
    src:Home,
    alt:"home",
    label:"home"
}