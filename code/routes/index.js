import express from 'express';
import cors from 'cors';
import {
  getAllDailyCheckupResults,
  getSingleDailyCheckupResult
} from '../controllers/progressController.js';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('Hi, this is the progress microservice');
});

router.options('/progress', (req, res, next) => {
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
// router.get('/questionnaire/questions', cors(), getAllDailyCheckupResults);
// router.get('/questionnaire/questions/:id', cors(), getSingleDailyCheckupResult);
//router.post('/questionnaire', cors(), setResults);

export default router;