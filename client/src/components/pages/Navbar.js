import react, { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav id="main-nav">
      <div className="logo flx jc-btn">
        <a href="/">
          <h3 className="f-size-med bold-txt-2 t-up">Open Market</h3>
        </a>
        <i className="fas fa-ellipsis-h"></i>
      </div>
      <div className="chats-wrapper">
        <div className="chat-wrapper active">
          <h3 className="bold-txt-2">User #1</h3>
          <p>Here is a message from user #1</p>
        </div>
        <div className="chat-wrapper">
          <h3 className="bold-txt-2">User #2</h3>
          <p>Here is a message from user #2</p>
        </div>
        <div className="chat-wrapper">
          <h3 className="bold-txt-2">User #3</h3>
          <p>Here is a message from user #3</p>
        </div>
      </div>
      <div className="nav-footer-wrapper">
        <a href="/profile" className="profile-wrapper flx">
          <img src="images/profile.jpg" alt="" />
          <div className="txt-wrapper">
            <h3 className="bold-txt">User Login #1</h3>
            <a href="" className="btn">
              Logout
            </a>
          </div>
        </a>
        {/* <div className="btn-wrappers flx jc-enter">
          <a className="btn" href="/account">
            Login
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
