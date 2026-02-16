const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello world");
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

app.use("/professure", require("./routes/userRoutes"));
app.use("/student" , require("./routes/studnetRoutes"))
app.use("/actualcheakin" , require("./routes/actualCheakin"))
app.use("/plannedcheakin" , require("./routes/plannedCheakin"))
const PORT  = 5244 ; 
app.listen(PORT, () => console.log(`Server running on port :${PORT}`));
