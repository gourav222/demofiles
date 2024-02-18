// import app from "./app.js";
// import { config } from "dotenv";
// import cors from "cors";
// import { Server } from "socket.io";
// import connectDB from "./config/dbConnection.js";
// app.use(cors());
// config();
// connectDB();

// const server = app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });

// Server(server, {
//   pingTimeout: 60000,
//   cors: {
//     origin: "http://localhost:3000",
//     // credentials: true,
//   },
// });

import { config } from "dotenv";
import cors from "cors";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/dbConnection.js";
import app from "./app.js";
app.use(cors());
config();
connectDB();

const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     // credentials: true,
//   },
// });

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
    // credentials: true,
  },
});

// io.on("connection", (socket) => {
//   console.log("Connected to socket.io");
//   socket.on("setup", (userData) => {
//     socket.join(userData._id);
//     socket.emit("connected");
//   });

//   socket.on("join chat", (room) => {
//     socket.join(room);
//     console.log("User Joined Room: " + room);
//   });
//   socket.on("typing", (room) => socket.in(room).emit("typing"));
//   socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

//   socket.on("new message", (newMessageRecieved) => {
//     var chat = newMessageRecieved.chat;

//     if (!chat.users) return console.log("chat.users not defined");

//     chat.users.forEach((user) => {
//       if (user._id == newMessageRecieved.sender._id) return;

//       socket.in(user._id).emit("message recieved", newMessageRecieved);
//     });
//   });

//   socket.off("setup", () => {
//     console.log("USER DISCONNECTED");
//     socket.leave(userData._id);
//   });
// });

io.on("connection", (socket) => {
  // console.log("Connected to socket.io");

  // These is one room for the user
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    // console.log(userData._id, "*******");
    socket.emit("connected");
  });

  //   When other user joins then room created
  socket.on("join chat", (room) => {
    socket.join(room);
    // console.log("User Joined Room:asdfas " + room);
  });

  socket.on("typing", (room) => {
    socket.to(room).emit("typing");
  });

  socket.on("stop typing", (room) => {
    socket.to(room).emit("stop typing");
  });

  // To send and receive the message

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;

    if (!chat.users) return console.log("chat.users not defined");

    // console.log("-----------", newMessageReceived);

    chat.users.forEach((user) => {
      if (user._id == newMessageReceived.sender._id) return;

      // io.in(user._id).emit("message received", message received);
      // socket.in("65ce0c49853aaab58ef07e9d").emit("testing", "hello");
      io.emit("message received", newMessageReceived);

      // console.log(user);
    });
  });

  socket.on("video call", (newVideoCall) => {
    var userData = newVideoCall.users;

    if (!userData) return console.log("chat.users not defined");

    console.log("video Wali link ayegi isme", userData);
    userData.forEach((user) => {
      if (user._id == newVideoCall.senderId) return;

      io.emit("video start", {
        ...user,
        senderName:
          userData[0].user !== user.name ? userData[0].name : userData[1].name,
        // senderId,
        videoCallLink: newVideoCall.videoCallLink,
      });
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
