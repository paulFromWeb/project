import React from "react";

import styles from "./PageInfo.module.scss";
const PageInfo = () => {
  return (
    <div className={styles.pageTitle}>
      <p className={styles.pageTitle__title}>Products</p>
      <p className={styles.pageTitle__subtitle}>
        We display products based on the latest products we have, if you want to
        see our old products please enter the name of the item
      </p>
    </div>
  );
};

export default PageInfo;
