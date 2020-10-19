const express = require("express")
// an instance of knex connected to the database and ready to go 
const db = require("../data/config")
const knex = require("knex")

const db = knex({
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/produce.db3",
	},
})

const router = express.Router()



module.exports = router