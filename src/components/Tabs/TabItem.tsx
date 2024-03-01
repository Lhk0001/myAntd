import React from "react"
export interface TabItemProps{
    label:string|React.ReactElement;
    disabled?:boolean;
    children?:React.ReactNode
}
const TabItem:React.FC<TabItemProps>=(props)=>{
    const {children}=props
    return (
        <div className="mg-tab-panel">
            {children}
        </div>
    )
}
TabItem.displayName='TabItem'
export default TabItem