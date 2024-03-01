import React from "react";
import {render,fireEvent} from '@testing-library/react'
import Button, { ButtonProps, ButtonSize, ButtonType } from "./Button";
const defailtProps={
    onClick: jest.fn()
}
const testPorps:ButtonProps={
    btnType:'primary',
    size:'lg',

}
describe('test Button component',()=>{
    it('should render the corrent default',()=>{
        const wrapper=render(<Button {...defailtProps}>Nice</Button>)
        const element =wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('mg-btn mg-btn-default')
        fireEvent.click(element)
        expect(defailtProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component based on different props',()=>{
        const wrapper=render(<Button  btnType={'link'}>Nice</Button>)
        const element =wrapper.getByText('Nice')
        expect(element).toBeInTheDocument()
        // expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('mg-btn mg-btn-link ')
    })
    it('should render a link when btnType equals link and href is provided',()=>{
        // const wrapper=render(<Button {...testPorps} btnType={ButtonType.Link}>Nice</Button>)
        // const element =wrapper.getByText('Nice')
        // expect(element).toBeInTheDocument()
    })
    it('should render disabled ',()=>{

    })
})