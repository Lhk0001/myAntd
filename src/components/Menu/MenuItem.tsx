import React, { ReactNode,useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";

export interface MenuItemProps{
    index?:string;
    disabled?:boolean;
    className?:string;
    style?:React.CSSProperties;
    itemType?:'link'|'select';
    children?:React.ReactNode;
}

const MenuItem:React.FC<MenuItemProps>=(props)=>{
    
    const context=useContext(MenuContext)
    const {index,disabled,itemType,className,style,children}=props
    
    const classes=classNames('mg-menu-item',className,{
        'is-disabled':disabled,
        'is-active':context.index===index,
        [`mg-menu-item-${itemType}`]:itemType
    })
    const handleClick=()=>{
        if(context.onSelect&&!disabled&&(typeof index==='string')){
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    )
}
MenuItem.displayName='MenuItem'
export default MenuItem