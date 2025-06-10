import express from 'express';
import db from './database.js';

// basic setup
const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint for a welcome message
app.get('/', (req,res) => {
  res.status(200).json({message:"koanAPI - Now using SQlite :)"});
});

const getRandomQuote = (category, res) => {
  let sql;
  const params = [];
  if (category) {
    // Get a random quote from a sepcific category
    sql = `SELECT quote FROM quotes WHERE category = ? ORDER BY RANDOM() LIMIT 1`;
    params.push(category);
  } else {
    // get a completely random quote from all categories
    sql = `SELECT quote FROM quotes ORDER BY RANDOM() LIMIT 1`;
  }

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(500).json({error:err.message});
      return;
    }
    res.status(200).json(row||{quote:"No quote found."});
  });
};

// API endpoints

// Endpoint to get a random "classic" quote
app.get('/classic', (req,res) => {
  getRandomQuote('classic', res);
});

// Endpoint to get a random "paradox" quote
app.get('/paradox', (req,res) =>{
  getRandomQuote('paradox', res);
});

// Endpoint to get a random "simple" quote
app.get('/simple', (req,res) =>{
  getRandomQuote('simple', res);
});

// Endpoint to get a completely random quote from all categories
app.get('/random', (req,res) => {
  getRandomQuote(null, res);
});

app.listen(PORT, () =>{
  console.log(`Server running on http://localhost:${PORT}`);
});