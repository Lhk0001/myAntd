import React from "react";
import {RenderResult, render} from '@testing-library/react'

import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";
const testProps:MenuProps={
    defaultIndex:'0',
    onSelect:jest.fn(),
    className:'test'
}
const testVerProps:MenuProps={
    defaultIndex:'0',
    mode:'vertical'
}
const generateMenu=(props:MenuProps)=>{
    <Menu {...props}>
          <MenuItem index={'0'}>1</MenuItem>
          <MenuItem disabled={true} index={'1'}>2</MenuItem>
          <MenuItem index={'2'}>3</MenuItem>
        </Menu>
}
let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
describe('test Menu and MenuItem component',()=>{
    beforeEach(()=>{
        // wrapper=generateMenu()
    })
    it('should render correct Menu and MenuItem based on default props',()=>{
        
        // let 
    })
    it('click items should change active and call the right callback',()=>{

    })
    it('should render vertical mode when mode is set to vertical',()=>{
        
    })
})