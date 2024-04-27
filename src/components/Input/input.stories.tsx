import React from "react";
import { ComponentStory,ComponentMeta } from "@storybook/react";
import Input from "./Input";
const inputMeta:ComponentMeta<typeof Input>={
    title:'Input',
    id:'Input',
    component:Input,
    tags:['autodocs'],
    decorators:[(Story:any)=>(<div style={{margin:'50px'}}><Story/></div>)]
}
export default inputMeta
const Template:ComponentStory<typeof Input>=(args)=>(
    <Input  {...args}/>
)
export const Default=Template.bind({})
Default.storyName='默认输入框'
export const LgInput=Template.bind({})
LgInput.args={
    size:'lg'
}
LgInput.storyName='大号输入框'
export const DisabledInput=Template.bind({})
DisabledInput.args={
    disabled:true
}
DisabledInput.storyName='禁用输入框'
export const PrependInput=Template.bind({})
PrependInput.args={
    prepend:"www.",
    onChange:(value)=>{console.log(value.target.value);
    }
}
PrependInput.storyName='前缀输入框'
export const AppendInput=Template.bind({})
AppendInput.args={
    append:".com"
}
AppendInput.storyName='后缀输入框'