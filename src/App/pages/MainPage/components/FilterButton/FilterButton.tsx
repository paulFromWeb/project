import React from "react";

import styles from "./FilterButton.module.scss";

export type FilterButtonProps = React.PropsWithChildren<{}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
const FilterButton: React.FC<FilterButtonProps> = ({ children, ...props }) => {
  return <button className={styles.filterButton}>{children}</button>;
};

export default FilterButton;
