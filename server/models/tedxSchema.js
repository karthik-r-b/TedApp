"use strict";

const mongoose = require('mongoose');

let tedxSchema = mongoose.Schema({
  description: {
    type: String
  },
  event: {
    type: String
  },
  main_speaker: {
    type: String
  },
  name: {
    type: String
  },
  published_date: {
    type: Number
  },
  ratings: {
    type: [Object]
  },
  related_talks: {
    type: [Object]
  },
  speaker_occupation: {
    type: String
  },
  tags: {
    type: [String]
  },
  title: {
    type: String
  },
  url: {
    type: String
  },
  views: {
    type: String
  }

})

module.exports = tedxSchema;
