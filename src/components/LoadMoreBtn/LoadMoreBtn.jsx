import React from "react";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleChangePage }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} onClick={handleChangePage}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
