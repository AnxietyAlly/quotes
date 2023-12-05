import Database from 'better-sqlite3';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const db = new Database(process.env.DB_PATH, { verbose: console.log });

function getToday() {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${day}-${month}-${year}`;
  console.log(currentDate); // "17-6-2022"
  return currentDate;
}

const tempResponse = {
  meta: {
    date: getToday(),
  },
  data: {
    message: 'this route is not implemented yet',
  },
};

export async function getAllDailyCheckupResults(req, res) {
  try {
    const stmnt = db.prepare("SELECT * FROM dailyCheckupResults");
    const rows = stmnt.all();
    const jsonToSend = {
      meta: {
        name: "Daily checkup results",
        title: "All results of all users from the daily checkup",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: []
    }
    for (let i = 0; i < rows.length; i++) {
      jsonToSend.data.push(`/dailyCheckupResults/${rows[i].id}`)
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleDailyCheckupResult(req, res) {
  try {
    const params = [req.params.id];
    const stmnt = db.prepare(`SELECT * FROM dailyCheckupResults where id = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      meta: {
        name: "Daily checkup result",
        title: "Specific daily checkup result",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllDailyCheckupResultsForUser(req, res) {
  try {
    const params = [req.params.userId];
    const stmnt = db.prepare(`SELECT * FROM dailyCheckupResults where user_id = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      meta: {
        name: "Daily checkup results for specific user",
        title: "All daily checkup results for specific user",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllDailyCheckupResultsBetweenDates(req, res) {
  try {
    const params = [req.params.minDate, req.params.maxDate];
    const stmnt = db.prepare(`SELECT * FROM dailyCheckupResults where id = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      meta: {
        name: "Daily checkup result",
        title: "Specific daily checkup result",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}

export async function getAllDailyCheckupResultsBetweenDatesForUser(req, res) {
  try {
    const params = [req.params.userId, req.params.minDate, req.params.maxDate];
    const stmnt = db.prepare(`SELECT * FROM dailyCheckupResults where id = ?`);
    const row = stmnt.get(params);
    const jsonToSend = {
      meta: {
        name: "Daily checkup result",
        title: "Specific daily checkup result",
        date: getToday(),
        originalUrl: `${req.originalUrl}`,
      },
      data: row
    }
    res.status(200).json(jsonToSend);
  } catch (err) {
    console.log(err);
  }
}