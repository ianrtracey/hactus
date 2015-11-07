// imports
var Sequelize = require("sequelize")

// initialize the database
var db = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
})

// load models
var Attendee = db.import("./models/attendee.js")


module.exports = db
