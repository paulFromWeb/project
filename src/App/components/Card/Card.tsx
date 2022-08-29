import React from "react";
import "./Card.css";
type CardProps = {
  /** URL изображения */
  image: string;
  category: string;
  /** Заголовок карточки */
  title: React.ReactNode;
  /** Подзаголовок карточки */
  subtitle: React.ReactNode;
  price: number;
  /** Клик на карточку */
  onClick?: React.MouseEventHandler;
};
export const Card: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  category,
  price,
  ...atrbts
}) => {
  return (
    <div {...atrbts} className="card">
      <img className="card__image" src={image} alt="" />
      <div className="card__info">
        <p className="card__category">{category}</p>
        <p className="card__title">{title}</p>
        <p className="card__subtitle">{subtitle}</p>
        <p className="card__price">${price}</p>
      </div>
    </div>
  );
};
