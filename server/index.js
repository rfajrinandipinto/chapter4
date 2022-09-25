const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

app.use(express.static("../public"));

router.get("/", function (req, res) {
  res.sendFile(path.join(PUBLIC_DIRECTORY, "/index.html"));
});

router.get("/cari", function (req, res) {
  res.sendFile(path.join(PUBLIC_DIRECTORY, "/cari.html"));
  // res.writeHead(200, { "Content-Type": "application/json" });
});

app.use("/", router);
app.use("/cari", router);

app.listen(8000, () => console.log("server running on port "));
