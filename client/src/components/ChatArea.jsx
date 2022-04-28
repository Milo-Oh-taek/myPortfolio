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

  const sendMsg = (e) => {
    e.preventDefault();
    let msg = e.target.msg.value;

    socket.emit("send message", { message: msg }, (e.target.msg.value = ""));
  };

  const scrollToBottom = () => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

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
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          margin: "10px",
          fontSize: "18px",
        }}
      >
        Want to know more? <br />
        Message me!
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => onClose()}
          style={{ height: "20px" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: "#f7f7f7",
          borderRadius: "1rem",
          overflowY: "scroll",
          wordBreak: "break-all",
        }}
        ref={scrollRef}
      >
        {msgArr.map((elem) => (
          <>
            {(elem.server === "succeed" || elem.server === "failed") && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "-29px",
                  marginRight: "26px",
                }}
              >
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
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  height: "auto",
                  margin: "1rem",
                }}
              >
                {elem.server === "N" && (
                  <div
                    style={{
                      fontWeight: "bold",
                      width: "50px",
                      fontSize: "12px",
                    }}
                  >
                    you{" "}
                  </div>
                )}

                <div
                  style={{
                    textAlign: "left",
                    width: "85%",
                    fontSize: "12px",
                  }}
                >
                  {elem.msg}
                </div>
              </div>
            )}
          </>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "300px",
          height: "60px",
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            height: "30px",
            marginTop: "10px",
          }}
          onSubmit={sendMsg}
        >
          <input
            style={{
              width: "250px",
              height: "20px",
              borderRadius: "5px",
              padding: "5px 0 0 0",
            }}
            name="msg"
          ></input>
          <button
            style={{
              width: "50px",
              backgroundColor: "#282c34",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatArea;
