import React from "react";
import { ThemeProps } from "../Icon/icon";

interface ProgressPropsType {
  percent: number;
  strokeHeight?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps;
}
const Progress: React.FC<ProgressPropsType> = (props) => {
  const { percent, strokeHeight, showText, styles, theme } = props;

  return (
    <div className="mg-progress-bar" style={styles}>
      <div
        className="mg-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`mg-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps={
    strokeHeight:15,
    showText:true,
    theme:'primary'
}
export default Progress