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
    
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for burger.addBurger
  
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    
});

// put route -> back to index
router.put("/burgers/:id", function(req, res) {
  
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    
    // Send back response and let page reload from .then in Ajax
    
  
});

module.exports = router;
