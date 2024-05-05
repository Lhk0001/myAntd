import classNames from "classnames";
import React, {
  ChangeEvent,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

export interface InputPropsType
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  className?: string;
  size?: "lg" | "sm";
  // icon?:
  prepend?: string | ReactElement; //前缀
  append?: string | ReactElement; //后缀
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputPropsType> = (props) => {
  const { disabled, className, size, prepend, append, children, ...resProps } =
    props;

  //根据属性值不同计算不同的classNames
  const cnames = classNames("mg-input-wrapper", {
    [`input-size-${size}`]: size,
    "is-disabled": disabled,
    "input-group": prepend || append,
    "input-group-append": !!append,
    "input-group-prepend": !!prepend,
  });

  if ("value" in props) {
    delete resProps.defaultValue;
  }
  return (
    <div className={cnames}>
      {prepend ? <div className="mg-input-group-prepend">{prepend}</div> : null}
      <input
        className="mg-input-inner"
        disabled={disabled}
        {...resProps}
      ></input>
      {append ? <div className="mg-input-group-append">{append}</div> : null}
    </div>
  );
};
export default Input;
