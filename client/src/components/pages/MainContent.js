import react, { useState, useEffect } from "react";
import Content from "../content/Content";
import Upload from "../upload/Upload";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="container">
        {/* <Upload /> */}
        <Content />
      </div>
      <div className="container-nav flx">
        <a href="">
          <i className="fa fa-home"></i>
        </a>
        <a href="">
          <i className="fa fa-plus-square"></i>
        </a>
        <a href="">
          <i className="fa fa-envelope"></i>
        </a>
        <a href="">
          <i className="fas fa-cog fa-fw"></i>
        </a>
      </div>
    </div>
  );
};

export default MainContent;
