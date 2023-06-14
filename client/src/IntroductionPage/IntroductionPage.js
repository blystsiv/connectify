import React, { useEffect, useState } from "react";
import logo from "../resources/images/logo.png";
import ConnectingButtons from "./ConnectingButtons";
import { connect } from "react-redux";
import { setIsRoomHost } from "../store/actions";
import jwt from 'jsonwebtoken';


import "./IntroductionPage.css";
import GoogleAuthIcon from "./GoogleAuthIcon";
import LogoutButton from "./LogoutButton";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  const [googleId, setGoogleId] = useState("");
  const [name, setName] = useState("");
  const jwtToken = localStorage.getItem("jwt"); // Получаем значение JWT из Local Storage

  useEffect(() => {
    setIsRoomHostAction(false);
    // Проверка на jwt 
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get("jwt");
    
    if (jwtToken) {
      localStorage.setItem("jwt", jwtToken);
      window.location = "http://localhost:3000";
    }
  }, []);

  useEffect(() => {
    if (jwtToken) {
      const decodedToken = jwt.decode(jwtToken);
      if (decodedToken) {
        setGoogleId(decodedToken.user.googleId);
        setName(decodedToken.user.username);
      }
    }
  }, [jwtToken]);

  const renderButton = () => {
    if (jwtToken) {
      return <LogoutButton />;
    } else {
      return <GoogleAuthIcon />;
    }
  };

  return (
    <div className="introduction_page_container">
      {jwtToken && (
        <div className="profile_data">
          <h2>GoogleId: {googleId}</h2>
          <h2>Name: {name}</h2>
        </div>
      )}
      {renderButton()}
      <div className="introduction_page_panel">
        <img src={logo} className="introduction_page_image" alt="Logo" />
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
