var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Request = require("request");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// ROUTES FOR OUR API
var router = express.Router();

router.get('/', function (req, res) {
  res.json({ message: 'Welcome' });
});

//fetch list of blocks
router.get('/BlockList', function (req, res) {
  Request.get("https://blockchain.info/blocks?format=json", (error, response, body) => {
    if (error) {
      console.log(error);
      res.error({message: 'Error'});
    }
    res.json({ data: response });
  });
});

//fetch details by has
router.post('/BlockDetails', function (req, res) {
  Request.get(`https://blockchain.info/rawblock/${req.query.hash}`, (error, response, body) => {
    if (error) {
      console.log(error);
      res.error({message: 'Error'});
    }
    res.json({ data: response });
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// all of our routes will be prefixed with /BlockApi
app.use('/BlockApi', router);

// START THE SERVER
app.listen(port);
console.log('Server running on port ' + port);
