import React,{useContext,FunctionComponentElement,useState, useMemo} from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import MenuItem, { MenuItemProps } from "./MenuItem";

export interface SubMenuProps{
    index?:string;
    title?:string;
    className?:string
    children?:React.ReactNode
    disabled?:boolean
    defaultOpen?:boolean
}

const SubMenu:React.FC<SubMenuProps>=(props)=>{
    const context=useContext(MenuContext)
    const {index,title,className,children,disabled,defaultOpen,...restprops}=props;
    const [open,setOpen]=useState((context.mode==='vertical'&&defaultOpen)||false)
    const classes=classNames('mg-menu-item submenu-item',className,{
        'is-active':context.index===index
    })
    console.log('sub',context.mode);
    const handleClick=()=>{
        if(context.onSelect&&!disabled&&(typeof index==='string')){
            context.onSelect(index)
            setOpen(!open)
        }
    }
    let timer:any
    const handleMouse=(e:React.MouseEvent,toggle:boolean)=>{
        clearTimeout(timer);
        timer=setTimeout(() => {
            setOpen(toggle)
        }, 300);
    }
    const clickEvents=context.mode==='vertical'?{
        onClick:handleClick
    }:{onClick:()=>{console.log(index);
    }}
    const hoverEvents=context.mode!=='vertical'?{
        onMouseEnter:(e:React.MouseEvent)=>handleMouse(e,true),
        onMouseLeave:(e:React.MouseEvent)=>handleMouse(e,false)
    }:{}
    
    const renderChildren=()=>{
        const childrenComponent=React.Children.map(children,(child,indexF)=>{
            const childElement=child as FunctionComponentElement<MenuItemProps>
            if(childElement.type.displayName==='MenuItem'){
                return <MenuItem {...childElement.props} index={index+'-'+String(indexF)}></MenuItem>
            }
            else {
                console.error("Waring: Menu has a child which is not a MenuItem component");
            }
        })
        return (
            <ul className="mg-submenu">
                {childrenComponent}
            </ul>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents} >
            <div className="submenu-title"  {...clickEvents} >
                {title}
            </div>
            {open?renderChildren():null}
        </li>
    )
}
SubMenu.displayName='SubMenu'
export default SubMenu;