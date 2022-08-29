import React from "react";

import { Button } from "@components/Button/Button";
import { Card } from "@components/Card/Card";
import { Link } from "react-router-dom";

import FilterButton from "./components/FilterButton/FilterButton";
import { Input } from "./components/Input/Input";
import PageInfo from "./components/PageInfo/PageInfo";
import AxiosResponses from "./MainPage";
import styles from "./MainPage.module.scss";

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
type MainPageProps = {
  productsData: AxiosResponses[];
};
const MainPage: React.FC<MainPageProps> = ({ productsData, ...props }) => {
  return (
    <div>
      <PageInfo />
      <div className={styles.searchPanel}>
        <Input value={""} onChange={() => {}} placeholder={"Search property"}>
          <svg
            className={styles.searchPanel__icon}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3332 28.0001C22.3288 28.0001 27.9998 22.329 27.9998 15.3334C27.9998 8.33781 22.3288 2.66675 15.3332 2.66675C8.33756 2.66675 2.6665 8.33781 2.6665 15.3334C2.6665 22.329 8.33756 28.0001 15.3332 28.0001Z"
              stroke="#AFADB5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.3332 29.3334L26.6665 26.6667"
              stroke="#AFADB5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Button>Find Now</Button>
        </Input>
        <FilterButton>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 2.625H23.25C24.625 2.625 25.75 3.75 25.75 5.125V7.875C25.75 8.875 25.125 10.125 24.5 10.75L19.125 15.5C18.375 16.125 17.875 17.375 17.875 18.375V23.75C17.875 24.5 17.375 25.5 16.75 25.875L15 27C13.375 28 11.125 26.875 11.125 24.875V18.25C11.125 17.375 10.625 16.25 10.125 15.625L5.375 10.625C4.75 10 4.25 8.875 4.25 8.125V5.25C4.25 3.75 5.375 2.625 6.75 2.625Z"
              stroke="#151411"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.6625 2.625L7.5 12.5"
              stroke="#151411"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Filter</p>
        </FilterButton>
      </div>
      <div className={styles.totalProducts}>
        <p className={styles.totalProducts__title}>totalProducts</p>
        <div className={styles.totalProducts__cards}>
          {productsData
            ? productsData.map((elem, i) => {
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
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
