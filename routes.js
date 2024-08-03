const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.post("/api/twoi/dummy", function(req, res) {
  res.json(todos);
});

router.get("/api/test",function(req, res) {
  res.json({"message":"worked!!"});
})

module.exports = router;
