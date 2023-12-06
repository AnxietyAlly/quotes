import express from 'express';
import cors from 'cors';
import {
  getAllDailyCheckupResults,
  getSingleDailyCheckupResult,
  getAllDailyCheckupResultsForUser,
  getAllDailyCheckupResultsBetweenDates,
  getAllDailyCheckupResultsBetweenDatesForUser,
  addNewDailyCheckupResult
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
router.get('/dailyCheckupResults', cors(), getAllDailyCheckupResults);
router.get('/dailyCheckupResults/:id', cors(), getSingleDailyCheckupResult);
router.get('/user/:userId/dailyCheckupResults', cors(), getAllDailyCheckupResultsForUser);
router.get('/dateRange/:minDate/:maxDate/dailyCheckupResults', cors(), getAllDailyCheckupResultsBetweenDates);
router.get('/user/:userId/dateRange/:minDate/:maxDate/dailyCheckupResults', cors(), getAllDailyCheckupResultsBetweenDatesForUser);
router.post('/dailyCheckupResults', cors(), addNewDailyCheckupResult);


export default router;