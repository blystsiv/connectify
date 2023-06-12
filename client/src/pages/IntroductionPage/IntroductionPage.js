import React, { useEffect } from "react";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.png";
import { setIsRoomHost } from "../../store/actions";
import ConnectingButtons from "./ConnectingButtons";

import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img alt="logo" src={logo} className="introduction_page_image"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapActionsToProps)(IntroductionPage);
