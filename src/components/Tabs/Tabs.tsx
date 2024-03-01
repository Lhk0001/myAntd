import React, { ReactNode, useState } from "react";
import classNames from "classnames";
import { TabItemProps } from "./TabItem";
export interface TabsProps {
  defaultIndex?: number;
  className?: string;
  onSelect?: (selectIndex:number) => void;
  type?: "line" | "card";
  children?: ReactNode;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { defaultIndex=0, className, onSelect, children, type='line' } = props;
  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const navClass = classNames("mg-tabs-nav", {
    "nav-line": type === "line",
    "nav-card": type === "card",
  });
  const handleClick=(e:any,index:number,disabled?:boolean)=>{
    if(disabled) return ;
    setActiveIndex(index);
    if(onSelect) onSelect(index);
  }
  const renderNavLinks = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<TabItemProps>;
      const { label, disabled } = childElement.props;
      const displayName = childElement.type.displayName;
      const classes = classNames("mg-tabs-nav-item", {
        "is-active": activeIndex === index,
        "disabled": disabled,
      });
      if (displayName === "TabItem") {
        return (
          <li 
          className={classes} 
          key={`nav-item-${index}`}
            onClick={(e)=>handleClick(e,index,disabled)}
          >
            {label}
          </li>
        );
      }
    });
  };
  const renderContent = () => {
    
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<TabItemProps>;
      const displayName = childElement.type.displayName;
      if (displayName === "TabItem"){
        if (index === activeIndex) {
        return child
      }
      }
      
    })
  };
  return (
    <div className={`mg-tabs ${className}`}>
      <ul className={navClass}>{renderNavLinks()}</ul>
      <div className="mg-tabs-content">{renderContent()}</div>
    </div>
  );
};
export default Tabs;
