const express = require("express");
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = mongoose.connection;
const cors = require("cors");

const { Data } = require("./models/Data");

app.use(cors());
app.use(express.static("build"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://< DB id, pw >.phbgwnm.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.post("/api/post", (req, res) => {
  const data = new Data(req.body);

  data.save((err) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

// GET ALL BOOKS
app.get("/api/get", function (req, res) {
  Data.find(function (err, datas) {
    if (err) return res.status(500).send({ error: "database failure" });
    res.json(datas);
  });
});

app.patch("/api/updata/schoolRun", function (req, res) {
  Data.update({ useridx: req.body.useridx }, { $set: { user_schoolRun_bestScore: req.body.user_schoolRun_bestScore } }, { overwrite: true }, function (err) {
    if (err) res.status(500).json({ error: "failed to update" });
    res.json({ message: "data updated" });
  });
});

app.patch("/api/updata/dino", function (req, res) {
  Data.update({ useridx: req.body.useridx }, { $set: { user_dino_bestScore: req.body.user_dino_bestScore } }, { overwrite: true }, function (err) {
    if (err) res.status(500).json({ error: "failed to update" });
    res.json({ message: "data updated" });
  });
});

app.patch("/api/updata/stairs", function (req, res) {
  Data.update({ useridx: req.body.useridx }, { $set: { user_stairs_bestScore: req.body.user_stairs_bestScore } }, { overwrite: true }, function (err) {
    if (err) res.status(500).json({ error: "failed to update" });
    res.json({ message: "data updated" });
  });
});

app.delete("/api/delete/:idx", function (req, res) {
  Data.remove({ useridx: req.params.idx }, function (err, output) {
    if (err) return res.status(500).json({ error: "database failure" });
    res.status(204).end();
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
