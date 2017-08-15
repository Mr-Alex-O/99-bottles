const express = require('express');
const request = require('request');
const app = express();
const util = require('util');
var cors = require('cors')
const API_KEY = '';
const ROOT_URL = 'http://api.brewerydb.com/v2/';

app.use(cors());


app.get('/locations', function(req, res) {
  request
  .get(`${ROOT_URL}locations`,{
    qs: {
      locality: req.query.locality,
      region: req.query.region,
      key: API_KEY
    }
  })
  .pipe(res);
})

app.get('/brewery/:id', function(req, res) {
  request
  .get(`${ROOT_URL}brewery/${req.params.id}`, {
    qs: {
      withLocations: "Y",
      key: API_KEY
    }
  })
  .pipe(res);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
