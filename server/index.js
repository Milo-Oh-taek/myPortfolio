const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const axios = require("axios");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

require("dotenv").config();

app.use(cors({ origin: "http://localhost:3000" }));

const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

const sendSlack = async (id, msg) => {
  try {
    let channel = "";
    if (id === "entered") {
      channel = process.env.SLACK_HOOK_ENTER;
    } else {
      channel = process.env.SLACK_HOOK_MSG;
    }
    const { data } = await axios({
      method: "post",
      url: channel,
      data: {
        text: id + " : " + msg,
      },
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

io.on("connection", (socket) => {
  console.log("connection");
  console.log(socket.id);

  io.emit("receive message", {
    msg: "you can send a DM to my Slack here. please don't forget to leave your contact info.",
    server: "Y",
  });

  socket.on("init", (payload) => {
    socket.join(payload);
  });

  socket.on("send message", (item) => {
    console.log(item.id + " : " + item.message);
    io.to(socket.id).emit(
      "receive message",
      { msg: item.message, server: "N" },
      () => {
        sendSlack(socket.id, item.message).then((result) => {
          if (result === "ok") {
            io.emit("receive message", { server: "succeed" });
          } else {
            io.emit("receive message", { server: "failed" });
          }
        });
      }
    );
  });
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/entered", (req, res) => {
  sendSlack("entered", req.query.country);
});

server.listen(3001, () => console.log("server listening..."));
