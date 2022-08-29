import React from "react";

import { Loader } from "@components/Loader/Loader";
import classNames from "classnames";
import "./Button.scss";

/** Возможные раскраски кнопки */
export enum ButtonColor {
  /** Основная, акцентная кнопка */
  primary = "primary",
  /** Второстепенная кнопка */
  secondary = "secondary",
}

/** Пропсы, который принимает компонент Button */
export type ButtonProps = React.PropsWithChildren<{
  /**
   * Если true, то внутри кнопки вместе с children отображается компонент Loader
   * Также кнопка должна переходить в состояние disabled
   * По умолчанию - false
   */
  loading?: boolean;
  /** Цвет кнопки, по умолчанию -  ButtonColor.primary*/
  color?: ButtonColor;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  color,
  className,
  disabled,
  ...atrbts
}) => {
  const buttonClasses = classNames(
    "button",
    color ? "button_color-secondary" : "button_color-primary",
    color === "primary" ? "button_color-primary" : "",
    color === "secondary" ? "button_color-secondary" : "",
    loading ? "button_disabled" : "",
    disabled ? "button_disabled" : "",
    className ? className : ""
  );
  return (
    <button
      {...atrbts}
      className={buttonClasses}
      disabled={disabled || loading ? true : false}
    >
      {loading ? <Loader fill="white" /> : ""}
      {children}
    </button>
  );
};
