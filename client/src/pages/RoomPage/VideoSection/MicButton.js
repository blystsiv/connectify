import React, { useState } from "react";
import MicButtonImgOff from "../../../assets/icons/microphone-off.svg";
import MicButtonImg from "../../../assets/icons/microphone.svg";
import * as webRTCHandler from "../../../utils/webRTCHandler";

const MicButton = () => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    webRTCHandler.toggleMic(isMicMuted);

    setIsMicMuted(!isMicMuted);
  };

  return (
    <div className="video_button_container">
      <img
        alt="mute button"
        src={isMicMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handleMicButtonPressed}
        className="video_button_image"
      />
    </div>
  );
};

export default MicButton;

