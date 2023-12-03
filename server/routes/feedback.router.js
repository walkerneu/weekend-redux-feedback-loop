const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const incFb = req.body;
    const sqlText = 
        `INSERT INTO "feedback" 
                ("feeling", "understanding", "support", "comments")
            VALUES 
                ($1, $2, $3, $4)`;

    pool.query(sqlText, [incFb.feelings, incFb.understanding, incFb.support, incFb.comments])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Something went funky in the POST route, Batman!', error);
            res.sendStatus(500);
        });
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "feedback" WHERE id=$1', [req.params.id])
      .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('It wend bad in the delete zone, my guy', error);
        res.sendStatus(500);
    })
});

router.put('/:id', (req, res) => {
    const sqlText = `
        UPDATE "feedback"
            SET "flagged" = NOT "flagged"
            WHERE "id" = $1;`
    pool.query(sqlText, [req.params.id])
      .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('It didnt update the thang dood', error);
        res.sendStatus(500);
    })
});

module.exports = router;