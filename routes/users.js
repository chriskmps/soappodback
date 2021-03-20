var express = require('express');
var router = express.Router();
let soap = require('soap');



/* GET users listing. */
router.get('/', function(req, res, next) {
  const wsdlUrl = 'http://localhost:8088/mockServiceSoapBinding?WSDL'
  soap.createClient(wsdlUrl, function(err, soapClient){
    if(err) {
      return res.status(500).json(err);
    }

    soapClient.login({
      username: 'Login',
      password: 'Login123'
    }, function(error, result) {
      if(error) {
        return res.status(500).json(error);
      }
      console.log(result);
    })
  });
  res.send("its sent")

});

module.exports = router;
