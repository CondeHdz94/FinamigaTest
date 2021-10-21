import React from "react";
import img404 from "../assets/img/404Page.svg";
import "../assets/styles/pages/PageError.scss";
const PageError = () => {
  return (
    <div className="ImgError">
      <img src={img404} alt="" />
    </div>
  );
};

export default PageError;
