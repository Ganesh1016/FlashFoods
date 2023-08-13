/* eslint-disable no-undef */
const express = require("express");
const user = require("../models/USer");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await user.create({
      name: "Ganesh Gajelly",
      email: "ggajelly22@gmail.com",
      password: "123456",
      username: "ganeshgajelly",
      age: 20,
      location: "Kathmandu",
    });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false, error });
  }
});

module.exports = router;
