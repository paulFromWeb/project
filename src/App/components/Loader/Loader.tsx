import React from "react";

import classNames from "classnames";
import "./Loader.css";
export enum LoaderSize {
  s = "s",
  m = "m",
  l = "l",
}

type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
  fill?: string;
};
export const Loader: React.FC<LoaderProps> = ({
  loading,
  size,
  className,
  fill,
  ...atrbts
}) => {
  const loaderClasses = classNames(
    className,
    `loader_size-${size ? size : "m"}`
  );
  if (loading !== false) {
    return (
      <svg
        {...atrbts}
        className={loaderClasses}
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.1414 17.1474C11.904 18.3011 9.11771 18.2055 6.9124 16.6613C3.74556 14.4439 2.97593 10.0791 5.19337 6.91225C7.41081 3.74541 11.7756 2.97578 14.9425 5.19322C17.1478 6.73739 18.1906 9.32289 17.8717 11.82L20.858 12.1202C21.2803 8.57849 19.7894 4.92473 16.6632 2.73576C12.1391 -0.432011 5.90369 0.667469 2.73592 5.19152C-0.43186 9.71557 0.667619 15.951 5.19167 19.1188C8.31784 21.3078 12.2612 21.4591 15.4449 19.851L14.1414 17.1474Z"
          fill={fill ? fill : "#518581"}
        />
      </svg>
    );
  } else {
    return null;
  }
};
