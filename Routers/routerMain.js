const express = require('express');
const router = express.Router();

const knex = require('../data/dbConfig.js');





router.get("/", (req, res) => {

    knex
      .select('*')
      .from('accounts')
      .first()
      .then(e => {
        res.status(200).json(e);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: "Error getting the accounts" });
      });
  });
  
  router.get('/:id', (req, res) => {
    knex
    .select('*')
    .from('accounts')
    .where ({id: req.params.id})
    .first()
    .then(item => {
        res.status(200).json(item)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})
router.post('/', (req, res) => {
    knex
    .insert(req.body, 'id')
    .into('accounts')
    .then(e => {
        res.status(200).json(e)
    })
    .catch(error => {
        res.status(500).json({ error: "failed to insert account" })
    })
})


router.put('/:id', (req, res) => {
    knex('accounts')
        .where({ id: req.params.id })
        .update(req.body)
    .then(e => {
        res.status(200).json(e);
    })
    .catch(error => {
        res.status(500).json({ error: "failed to edit account" })
    })
}); 

router.delete('/:id', (req, res) => {
    knex('accounts')
        .where({ id: req.params.id })
        .del()
    .then(e => {
        res.status(200).json(e);
    })
    .catch(error => {
        res.status(500).json({ error: "failed to delete post" })
    })
});


module.exports = router;