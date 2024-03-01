import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import React from "react";
import {ComponentMeta, ComponentStory} from '@storybook/react'

const menuMeta:ComponentMeta<typeof Menu>={
    title:'Menu组件',
    id:'Menu',
    component:Menu,
    tags: ['autodocs'],
    args:{
        defaultIndex:'0'
    }
}
export default menuMeta

const Template:ComponentStory<typeof Menu>=(args)=>(
    <Menu {...args}>
        <MenuItem>link 1</MenuItem>
        <MenuItem>link 2</MenuItem>
        <MenuItem disabled>disable</MenuItem>
        <SubMenu title="下拉">
            <MenuItem>选项1</MenuItem>
            <MenuItem>选项2</MenuItem>
            <MenuItem>选项3</MenuItem>
        </SubMenu>
    </Menu>
)
export const DefalutMenu=Template.bind({})
DefalutMenu.storyName='默认Menu'
export const VerticalMenu=Template.bind({})
VerticalMenu.args={
    defaultIndex:'1',
    mode:'vertical'
}
VerticalMenu.storyName='纵向Menu'
export const VerticalExpendMenu=Template.bind({})
VerticalExpendMenu.args={
    defaultIndex:'3',
    mode:'vertical',
    defaultOpenSubMenus:['3']
}
