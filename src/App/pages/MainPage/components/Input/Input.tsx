import React, { useState } from "react";

import classNames from "classnames";
import "./Input.css";
/** Пропсы, которые принимает компонент Input */
export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange"
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
};
export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  disabled,
  children,
  className,
  ...atrbts
}) => {
  const inputClasses = classNames(
    className ? className : "",
    disabled ? "input_disabled" : ""
  );
  return (
    <div className="searchBlock">
      <input
        type="text"
        value={value}
        className={inputClasses}
        disabled={disabled ? true : false}
        onChange={(e) => onChange(e.target.value)}
        {...atrbts}
      />
      {children}
    </div>
  );
};
