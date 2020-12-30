const chalk = require("chalk");
const { socketDisconnect, getloginType } = require("../apps/auth/auth.service");

module.exports = (io) => {
  io.on("connect", (socket) => {
    console.log(chalk.green(`new socket connection: ${socket.id}`));

    // io.set("heartbeat timeout", 5000);
    // io.set("heartbeat interval", 2000);
    socket.on("disconnect", async () => {
      let loginType = await getloginType({ socketId: socket.id });

      console.log(chalk.green(`socket ${socket.id} disconnected`));
      socketDisconnect({ socketId: socket.id, loginType: loginType });
    });
    socket.on("ping", () => {
      console.log(chalk.green(`socket ${socket.id} PING`));
      ``;
    });

    socket.on("chat", (data) => {
      for (let index = 0; index < data.receiverSocketId.length; index++) {
        io.to(data.receiverSocketId[index]).emit("chat", data);
      }
    });

    socket.on("Base", (data) => {
      io.to(data.senderSocketId).emit("Base", data);
      io.to(data.receiverSocketId).emit("Base", data);
    });
    socket.on("notification", (data) => {
      // io.to(data.senderSocketId).emit("notification", data);
      io.to(data.receiverSocketId).emit("notification", data);
    });
  });
};
