const express = require('express');

// const knex = require('./data/dbConfig.js');

const mainRouter = require("./Routers/routerMain")


const server = express();

server.use(express.json());

// server.get("/accounts", (req, res) => {

//     knex
//       .select("*")
//       .from("accounts")
//       .then(accounts => {
//         res.status(200).json(accounts);
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json({ errorMessage: "Error getting the accounts" });
//       });
//   });
  

server.use('/api/accounts', mainRouter)

module.exports = server;