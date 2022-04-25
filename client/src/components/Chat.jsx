import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import ChatArea from "./ChatArea";
import io from "socket.io-client";

const Chat = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [openChat, setOpenChat] = useState(false);

  const scroll = () => {
    let scrollY = window.scrollY;
    let height = window.innerHeight * 0.5;

    if (scrollY > height) {
      setChatVisible(true);
    } else {
      setChatVisible(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => {
      scroll();
    };
  }, []);

  const closeHandler = () => {
    setOpenChat(false);
  };

  useEffect(() => {
    if (!openChat) return;
    setTimeout(() => {
      io.connect("http://localhost:3001");
    }, 1000);
  }, [openChat]);

  return (
    <div className={chatVisible ? "chatWrapper" : "chatWrapper hide"}>
      {openChat ? (
        <ChatArea onClose={closeHandler} />
      ) : (
        <FontAwesomeIcon
          icon={faCommentDots}
          onClick={() => setOpenChat(true)}
        />
      )}
    </div>
  );
};

export default Chat;
