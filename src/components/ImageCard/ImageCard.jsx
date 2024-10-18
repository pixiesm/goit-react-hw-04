import React from "react";
import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <>
      <a href={image.url}>
        <img
          width={400}
          className={s.image}
          src={image.urls.small}
          target="_blank"
          alt={image.alt_description}
        />
      </a>
      <ul className={s.list}>
        <li className={s.item}>{image.alt_description}</li>
      </ul>
    </>
  );
};

export default ImageCard;
