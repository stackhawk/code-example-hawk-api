const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/list", (request, response) => {
  fetch("http://localhost:8000/api/hawk/list")
    .then(res => res.json())
    .then(json => response.send(json));
});

app.post("/api/hawk", (req, response) => {
  console.log(req.body);
  fetch("http://localhost:8000/api/hawk", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(json => response.send(json));
});

app.listen(8080);
