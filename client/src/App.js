import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connectWithSocketIOServer } from "./utils/wss";
import { NotFound } from "./pages/NotFound";
import { IntroductionPage } from "./pages/Introduction/Introduction";
import JoinRoomPage from "./pages/JoinRoomPage/JoinRoomPage";
import RoomPage from "./pages/RoomPage/RoomPage";
import "./App.css";

function App() {
  useEffect(() => {
    connectWithSocketIOServer();
  }, []);

  return (
    <Routes>
      <Route path='/' element={<IntroductionPage />} exact />
      <Route path='/join' element={<JoinRoomPage />} />
      <Route path='/room' element={<RoomPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
