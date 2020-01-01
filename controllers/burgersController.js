var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      //console.log(hbsObject);
      res.render("index", hbsObject);
    });
    
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    burger.create(req.body.burger_name, function(result) {

      res.redirect("/");
      //res.json({ id: result.insertId });
    });
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    
    // Send back response and let page reload from .then in Ajax
    var burgerID = req.params.id;

    console.log("burgerID in router.put controller is: " + burgerID);

    burger.update(burgerID, function(result) {

      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

      //res.redirect("/");

    });
  
});

module.exports = router;
