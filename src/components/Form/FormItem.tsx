import React from "react";
import classNames from "classnames";

interface FormItemProps {
  label?: string;
  children?: React.ReactNode;
}
const FormItem: React.FC<FormItemProps> = (props) => {
  const { label, children } = props;
  const rowClass = classNames("mg-row", {
    "mg-row-no-label": !label,
  });
  return (
    <div className={rowClass}>
      {label && (
        <div className="mg-form-item-label">
          <label title={label}>{label}</label>
        </div>
      )}
      <div className="mg-form-item">{children}</div>
    </div>
  );
};
export default FormItem;
