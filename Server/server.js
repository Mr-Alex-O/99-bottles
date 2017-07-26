const express = require('express');
const request = require('request');
const app = express();
var cors = require('cors')
const API_KEY = '';

app.use(cors());


app.get('/locations', function(req,res) {
  request
  .get('http://api.brewerydb.com/v2/locations',{
    qs: {
      locality: req.query.locality,
      region: req.query.region,
      key: API_KEY
    }
  })
  .pipe(res);
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
})
