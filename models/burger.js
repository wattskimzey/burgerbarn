// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    
    // Invoke our orm.all function here

    });
  },
  
  create: function(name, cb) {
    // invoke orm.create
  },
  update: function(id, cb) {
    // invoke orm.update
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
