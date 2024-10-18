import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

export const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul className={s.list}>
        {images.map((image) => (
          <li
            key={image.id}
            onClick={() => openModal(image)}
            id={image.id}
            className={s.item}
          >
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
    </div>
  );
};
