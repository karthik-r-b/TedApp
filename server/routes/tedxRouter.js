"use strict";
const express = require('express');
const router = express.Router();
const {
  Tedx
} = require('../config/database');

router.get('/events', async (request, response) => {
  let result = {};
  try {
    result = await Tedx.find().limit(10).exec();
  } catch (e) {
    console.error(e);
  } finally {
    response.json(result);
  }

})

router.get("/page/:pageId", async (request, response) => {
  const pageId = request.params.pageId;
  let pageSkip = pageId * 10;
  let result = {};
  try {
    result = await Tedx.find()
      .limit(10)
      .skip(pageSkip)
      .exec();
  } catch (error) {
    console.error(error);
  } finally {
    response.json(result);
  }
});


router.get("/events/:tedxId", async (request, response) => {
  const event = request.params.tedxId;
  console.log(event);
  let result = {};
  try {
    result = await Tedx.find({
      event: event
    });
  } catch (e) {
    console.error(e);
  } finally {
    response.json(result);
  }
});

module.exports = router;
