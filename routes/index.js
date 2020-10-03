var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    function calculate(method, x, y) {
        if (req.query.method === "add") {
            console.log(parseInt(x) + parseInt(y));
        } else if (req.query.method === "subtract") {
            console.log(parseFloat(x) - parseFloat(y));
        }else if (req.query.method === "multiply"){
          console.log(parseFloat(x) * parseFloat(y));
        }else if (req.query.method === "divide"){
          console.log(parseFloat(x) / parseFloat(y))
        }else {
           console.log("Wrong method")
        }
    }

    calculate(req.query.method, req.query.x, req.query.y);


    res.render('index', {title: 'Alp'});
});

module.exports = router;
