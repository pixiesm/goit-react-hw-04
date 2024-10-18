import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import s from "./ImageModal.module.css";

const ImageModal = ({ closeModal, selectedImage }) => {
  return (
    <div className={s.wrapper}>
      <button onClick={closeModal} className={s.modalBtn}>
        <IoCloseOutline className={s.modalIcon} />
      </button>
      <img
        className={s.image}
        src={selectedImage.urls.regular}
        alt={selectedImage.alt_description}
      />
    </div>
  );
};

export default ImageModal;
