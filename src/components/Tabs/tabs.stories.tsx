import Tabs from "./index";
// import TabItem from "./TabItem";
import {ComponentMeta, ComponentStory} from '@storybook/react'

const TabItem=Tabs.Item
const tabsMeta:ComponentMeta<typeof Tabs>={
    title:'Tabs',
    id:'tabs',
    component:Tabs,
    tags: ['autodocs'],
}
export default tabsMeta
const Template:ComponentStory<typeof Tabs>=(args)=>(
    <Tabs {...args}>
      <TabItem label={'1'}>内容1</TabItem>
      <TabItem label={'2'}>内容2</TabItem>
      <TabItem label={'3'}>内容3</TabItem>
    </Tabs>
)
export const DefaultTabs=Template.bind({})
DefaultTabs.storyName='defalutTabs'
DefaultTabs.args={
    type:'line',
    defaultIndex:0
}


export const CardTabs=Template.bind({})
CardTabs.args={
    type:'card'
}
CardTabs.storyName='cardTabs'

export const DefaultIndexTabs=Template.bind({})
DefaultIndexTabs.args={
    defaultIndex:1
}
DefaultIndexTabs.storyName='defaultIndexTabs'