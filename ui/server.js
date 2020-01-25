const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/list", (req, res) => {
  fetch("http://localhost:8000/api/hawk/list")
    .then(res => res.json())
    .then(json => res.send(json));
});

app.listen(8080);
