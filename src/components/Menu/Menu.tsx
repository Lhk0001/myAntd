import React, { useState,createContext } from "react";
import classNames from "classnames";
import MenuItem,{MenuItemProps} from "./MenuItem";
import SubMenu from "./SubMenu";

type SelectCallback=(selectedIndex:string)=>void
type MenuMode='horizontal'|'vertical'
export interface MenuProps{
    className?:string;
    defaultIndex?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    children?:React.ReactNode;
    onSelect?:SelectCallback;

    defaultOpenSubMenus?:string[]
}
interface IMenuContext{
    index:string,
    onSelect?:SelectCallback,
    mode:MenuMode
}
export const MenuContext=createContext<IMenuContext>({index:'0',mode:'horizontal'})
export const Menu:React.FC<MenuProps>=(props)=>{
    const {className,defaultIndex,mode,style,onSelect,children,defaultOpenSubMenus,...restProps}=props
    const [currentActive,setActive]=useState(defaultIndex||'0')
    const classes=classNames('mg-menu',className,{
        'mg-menu-vertical':mode==='vertical',
        'mg-menu-horizontal':mode!=='vertical'
    })
    const handleClick=(index:string)=>{
        setActive(index)
        if(onSelect) onSelect(index)
    }
    const passedContext:IMenuContext={
        index:currentActive?currentActive:'0',
        onSelect:handleClick,
        mode:mode?mode:'horizontal'
    }
    const renderChildren=()=>{
        return React.Children.map(children,(child,index)=>{
            const childElement=child as React.FunctionComponentElement<MenuItemProps>
            // if(!childElement.props.index){
            //     childElement.props.index=index;
            // }
            
            const dispalyName=childElement.type.displayName
            if(dispalyName ==='MenuItem'){
                return <MenuItem {...childElement.props} index={String(index)}>{childElement.props.children}</MenuItem>
            }
            else if(dispalyName ==='SubMenu'){
                
                return <SubMenu {...childElement.props} defaultOpen={defaultOpenSubMenus?.includes(String(index))?true:false} index={String(index)}>
                    {childElement.props.children}
                </SubMenu>
            }
            else {
                console.error("Waring: Menu has a child which is not a MenuItem component");
                
            }
        })
    }
    return (
        <ul className={classes} style={style} {...restProps}>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
            
        </ul>
    )
}
Menu.defaultProps={
    defaultIndex:'0',
    mode:'horizontal',
}

export default Menu