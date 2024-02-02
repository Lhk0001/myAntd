import React from "react";
import "../../styles/index.scss";
import classNames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
type NativeButtonProps=BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps=BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
export type ButtonProps=Partial<NativeButtonProps & AnchorButtonProps>
const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href ,...restProps} = props;
  //默认btn
  const classes = classNames("mg-btn",className, {
    [`mg-btn-${btnType}`]: btnType,
    [`mg-btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  if (btnType === ButtonType.Link && href) {
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
    btnType:ButtonType.Default
}
export default Button