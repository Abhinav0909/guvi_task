const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const AuthRoute = require("./routes/signup.js");
const ProfileRoute = require("./routes/profile.js");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log("Error connecting to db", err);
    else console.log("DB Connected Successfully");
  }
);
app.use("/api/auth", AuthRoute);
app.use("/api/auth", ProfileRoute);
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
