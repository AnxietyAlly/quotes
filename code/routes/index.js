import express from 'express';
import cors from 'cors';
import {
  getAllQuotes,
  getSingleQuote
} from '../controllers/quotesController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Hi, this is the quotes microservice');
});

router.options('/quotes', (req, res, next) => {
  try {
    //set header before response
    res.header({
      allow: 'GET, POST, OPTIONS',
      'Content-type': 'application/json',
      Data: Date.now(),
      'Content-length': 0,
    });
    //response
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

// get a collection of all the accounts, you can also use a query
router.get('/quotes', cors(), getAllQuotes);
router.get('/quotes/:id', cors(), getSingleQuote);

export default router;