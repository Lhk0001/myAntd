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

export const lgInput=Template.bind({})
lgInput.args={
    size:'lg'
}
export const DisabledInput=Template.bind({})
DisabledInput.args={
    disabled:true
}
export const PrependInput=Template.bind({})
PrependInput.args={
    prepend:"www."
}
export const AppendInput=Template.bind({})
AppendInput.args={
    append:".com"
}
export const ChangeInput=Template.bind({})
ChangeInput.args={
    onChange:(e)=>{
        console.log(e.target.value);
    },
    defaultValue:'ssss'
}