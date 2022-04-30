import React, { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCheckDouble,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

const ChatArea = ({ onClose }) => {
  const [msgArr, setMsgArr] = useState([]);
  const scrollRef = useRef();
  const inputRef = useRef();

  const sendMsg = (e) => {
    e.preventDefault();
    let msg = e.target.msg.value;

    socket.emit("send message", { message: msg }, (e.target.msg.value = ""));
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [onClose]);

  useEffect(() => {
    scrollToBottom();
  }, [msgArr]);

  useEffect(() => {
    socket.on("receive message", (message) => {
      console.log(message);
      setMsgArr((msgArr) => msgArr.concat(message));
    });
  }, []);

  return (
    <div className="chatArea">
      <div
        className="chat_Title
       "
      >
        Want to know more? <br />
        Message me!
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => onClose()}
          style={{ height: "20px" }}
        />
      </div>
      <div className="chat_dialogue" ref={scrollRef}>
        {msgArr.map((elem) => (
          <>
            {(elem.server === "succeed" || elem.server === "failed") && (
              <div className="chat_response">
                {elem.server === "succeed" ? (
                  <FontAwesomeIcon
                    icon={faCheckDouble}
                    style={{ height: "10px" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faExclamation}
                    style={{ height: "10px" }}
                  />
                )}
              </div>
            )}

            {(elem.server === "Y" || elem.server === "N") && (
              <div className="chat_message">
                {elem.server === "N" && <div className="from">you </div>}

                <div className="content">{elem.msg}</div>
              </div>
            )}
          </>
        ))}
      </div>

      <div className="chat_input_area">
        <form onSubmit={sendMsg}>
          <input name="msg" ref={inputRef} autoFocus></input>
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
