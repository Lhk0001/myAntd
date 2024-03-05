import Tabs from "./Tabs";
import TabItem from "./TabItem";
import {ComponentMeta, ComponentStory} from '@storybook/react'
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
export const defaultTabs=Template.bind({})
defaultTabs.storyName='defalutTabs'
defaultTabs.args={
    type:'line',
    defaultIndex:0
}


export const cardTabs=Template.bind({})
cardTabs.args={
    type:'card'
}
cardTabs.storyName='cardTabs'

export const defaultIndexTabs=Template.bind({})
defaultIndexTabs.args={
    defaultIndex:1
}
defaultIndexTabs.storyName='defaultIndexTabs'