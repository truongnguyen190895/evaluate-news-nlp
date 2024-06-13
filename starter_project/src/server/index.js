var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const FormData = require("form-data");
const fetch = require("node-fetch");
dotenv.config();

const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../../dist")));

// Variables for url and api key
const API_KEY = process.env.API_KEY;
const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";
console.log("API_KEY ", API_KEY);

const formData = new FormData();
app.post("/api", (req, res) => {
  const url = req.body.url;
  formData.append("key", API_KEY);
  formData.append("lang", "auto");
  formData.append("url", url);
  formData.append("of", "json");
  console.log("API is being sent from server");
  fetch(apiUrl, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => res.send(data))
    .catch((error) => res.send(error));
});

app.get("/", function (req, res) {
  // res.send("This is the server API page, you may access its services via the client app.");
  res.sendFile(path.join(__dirname, "../../dist/index.html"));
});

// POST Route

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log("Example app listening on port 8000!");
});
