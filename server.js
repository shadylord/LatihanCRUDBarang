const express = require("express");
const cors = require("cors");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
// const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(history());

app.use(serveStatic(__dirname + "/dist"));

app.listen(port);
