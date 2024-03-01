import React from "react";
import "../../styles/index.scss";
import classNames from "classnames";
export type ButtonSize ="lg"|"sm"

export type ButtonType ="primary"|"default"|"danger"|"link"

interface BaseButtonProps {
  className?: string;
  /**设置Button是否禁用*/
  disabled?: boolean;
  /**设置Button尺寸*/
  size?: ButtonSize;
  /**设置Button类型*/
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps=BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps=BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps=Partial<NativeButtonProps & AnchorButtonProps>
/**
 * 页面常用的按钮元素，完成特定的交互，支持HTML button和a链接的所有属性
 * ###引用方法
 * ```js
 * import {Button} from 'mg'
 * ```
 */

export const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href ,...restProps} = props;
  //默认btn
  const classes = classNames("mg-btn",className, {
    [`mg-btn-${btnType}`]: btnType,
    [`mg-btn-${size}`]: size,
    disabled: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a href={href} className={classes} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};
Button.defaultProps={
    disabled:false,
    btnType:'default'
}
export default Button