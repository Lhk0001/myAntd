import Button from "./Button";
import {ComponentMeta, ComponentStory} from '@storybook/react'

const buttonMeta :ComponentMeta<typeof Button>={
    title:'Button',
    id:'button',
    component:Button,
    tags: ['autodocs'],
    decorators:[(Story)=>(<div style={{margin:'50px'}}><Story/></div>)]
}
export default buttonMeta

const Template:ComponentStory<typeof Button>=(args)=>(
    <Button {...args}></Button>
)

export const Default=Template.bind({})
Default.args={
    children:'default'
}
Default.storyName='默认按钮'

export const ButtonLg=Template.bind({})
ButtonLg.args={
    children:'Large Button',
    size:'lg'
}
ButtonLg.storyName='大号按钮'

export const ButtonSm=Template.bind({})
ButtonSm.args={
    children:'Large Button',
    size:'sm'
}
ButtonSm.storyName='小号按钮'

export const ButtonDanger=Template.bind({})
ButtonDanger.args={
    btnType:'danger',
    children:'danger'
}
ButtonDanger.storyName='Danger'

export const ButtonPrimary=Template.bind({})
ButtonPrimary.args={
    btnType:'primary',
    children:'Primary'
}
ButtonPrimary.storyName='Primary'

export const ButtonLink=Template.bind({})
ButtonLink.args={
    btnType:'link',
    children:'link'
}
ButtonLink.storyName='Link'

// export const ButtonWithSize:ComponentStory<typeof Button>=()=>(
//     <>
//         <Button size={'lg'}>large button</Button>
//         <Button size={'sm'}>small button</Button>
//     </>
// )
// ButtonWithSize.storyName="不同尺寸的按钮"

// export const ButtonWithType:ComponentStory<typeof Button>=()=>(
//     <>
//         <Button btnType={'danger'}>danger</Button>
//         <Button btnType={'default'}>default</Button>
//         <Button btnType={'link'}>link</Button>
//         <Button btnType={'primary'}>primary</Button>
//     </>
// )
// ButtonWithType.storyName="样式不同的按钮"