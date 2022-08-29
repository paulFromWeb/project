import React from "react";

import { Button, ButtonColor } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.scss";
export type Rating = {
  rate: number;
  count: number;
};
export interface AxiosResponses {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: Rating;
}
type ProductCardProps = {
  productsData: AxiosResponses[];
};
const ProductCard: React.FC<ProductCardProps> = ({ productsData }) => {
  const { id } = useParams();
  const product = id ? productsData.find((elem) => elem.id === +id) : "";
  const relatedItems =
    product && productsData
      ? productsData.filter((elem) => {
          if (elem.category === product.category) {
            return elem;
          }
        })
      : null;
  return product ? (
    <div className={styles.productCard}>
      <div className={styles.productCard__info}>
        <img className={styles.productCard__img} src={product.image} alt="" />
        <div className={styles.productCard__rightBlock}>
          <p className={styles.productCard__title}>{product.title}</p>
          <p className={styles.productCard__colors}></p>
          <p className={styles.productCard__subtitle}>{product.description}</p>
          <p className={styles.productCard__price}>${product.price}</p>
          <div className={styles.productCard__buttons}>
            <Button>Buy Now</Button>
            <Button className={styles.button__white}>Add To Chart</Button>
          </div>
        </div>
      </div>
      <div className={styles.totalProducts}>
        <p className={styles.totalProducts__title}>totalProducts</p>
        <div className={styles.totalProducts__cards}>
          {relatedItems !== null
            ? relatedItems.map((elem, i) => {
                if (i < 3) {
                  return (
                    <Link to={`/products/${elem.id}`}>
                      <Card
                        key={i}
                        image={elem.image}
                        title={elem.title}
                        subtitle={elem.description}
                        category={elem.category}
                        price={elem.price}
                      ></Card>
                    </Link>
                  );
                }
              })
            : ""}
        </div>
      </div>
    </div>
  ) : null;
};

export default ProductCard;
