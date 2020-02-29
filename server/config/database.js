"use strict";
const mongoose = require('mongoose');
const tedxSchema = require('../models/tedxSchema');
const config = require("./config");
const csvtojson = require('csvtojson');
const tedxCsvPath = './files/TED-22kData.csv';


/*
create connection of mongoose
*/

let connection = mongoose.createConnection(config.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

let Tedx = connection.model("tedx", tedxSchema);

/*
Dumping the csv file to the mongodb
*/

connection.once("open", async () => {
  if ((await Tedx.countDocuments().exec()) > 0) return;
  Promise.all([
      csvtojson()
      .fromFile(tedxCsvPath)
      .then(jsonObj => {
        let tedxData = jsonObj.filter(item => item.id !== "id");
        Tedx.insertMany(tedxData)
          .then(res => console.log("Data Added to tedx Schema"))
          .catch(err => console.log(err));
      })
    ])
    .then(() => console.log("Data is added to mongodb"))
    .catch(err => console.log(err));
});


module.exports = {
  Tedx
};
