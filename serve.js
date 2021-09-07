const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require('./db.js/conn');
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
//const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const messageRoute = require("./routes/message")
//const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
dotenv.config({path:'./config.env'});
connectDB();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

/*mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
//app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api",messageRoute);
//app.use("/api/categories", categoryRoute);
app.use(express.static(path.join(__dirname, "/front-end/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/front-end/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running.");
});
