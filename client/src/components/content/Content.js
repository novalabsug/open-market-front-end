import react, { useState, useEffect } from "react";

const Content = () => {
  return (
    <div id="content-wrapper">
      <div className="items-wrapper">
        <h3 className="f-size-xlrg bold-txt-2">Recent updates</h3>
        <div className="item-wrapper">
          <div className="item-img-wrapper">
            <img src="images/img1.jpg" />
          </div>
          <div className="item-txt-wrapper">
            <p>Looking for this #1 item</p>
            <div className="flx wrapper jc-btn">
              <div className="wrapper-1 flx">
                <i aria-describedby="share-icon" className="fa fa-share"></i>
                {/* <div role="tooltip" id="share-icon">
                  Click to reply to post
                </div> */}
                <i className="fa fa-share-alt"></i>
              </div>
              <div className="wrapper-2 flx">
                <h3 className="bold-txt">User #1</h3>
                <p>2 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-img-wrapper"></div>
          <div className="item-txt-wrapper">
            <p>In need of this and this product asap. Hit my inbox</p>
            <div className="flx wrapper jc-btn">
              <div className="wrapper-1 flx">
                <i aria-describedby="share-icon" className="fa fa-share"></i>
                {/* <div role="tooltip" id="share-icon">
                  Click to reply to post
                </div> */}
                <i className="fa fa-share-alt"></i>
              </div>
              <div className="wrapper-2 flx">
                <h3 className="bold-txt">User #2</h3>
                <p>5 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="item-wrapper">
          <div className="item-img-wrapper"></div>
          <div className="item-txt-wrapper">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
              recusandae eaque est, nemo praesentium vel consequatur, corporis
              culpa iure possimus quibusdam reprehenderit veritatis minus quo
              optio odio! Qui, corporis eum.
            </p>
            <div className="flx wrapper jc-btn">
              <div className="wrapper-1 flx">
                <i aria-describedby="share-icon" className="fa fa-share"></i>
                {/* <div role="tooltip" id="share-icon">
                  Click to reply to post
                </div> */}
                <i className="fa fa-share-alt"></i>
              </div>
              <div className="wrapper-2 flx">
                <h3 className="bold-txt">User #3</h3>
                <p>15 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
