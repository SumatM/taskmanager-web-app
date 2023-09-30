const express = require("express");
const { connect } = require("mongoose");
const connection = require("./mongoConnection");
const taskRoute = require("./route/task.route");
const userRouter = require("./route/user.route");
const { loginRoute } = require("./route/login.route");

require("dotenv").config();

const app = express();
    app.use(express.json())

    app.use("/task",taskRoute)

    app.use("/user",userRouter)

    app.use("/login",loginRoute)

app.get("", (req, res) => {
  res.json({ message: "Welcome to Task Manager API build by Sumat" });
});

app.listen(8080, async () => {
  try {
    console.log("Server is Running");
    console.log(new Date())
    await connection
      .then(() => {
        console.log("DB is Connected");
      })
      .catch((err) => {
        console.log("Error while connected to DB", err);
      });
  } catch (err) {
    console.log(err);
  }
});
