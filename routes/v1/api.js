const express = require("express");
const axios = require('axios');
const res = require("express/lib/response");

const router = express.Router();

router.get('/', async (req, res) => {
  const location = await req.headers.location;
  const key = process.env.API_KEY;
  const url =
    `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=no&alerts=no`;
  
  try {
    const snapshot = await axios.get(url);
    res.status(200).json(snapshot.data)
  } catch (err) {
    res.status(400).json(err)
  }
})

module.exports = router;