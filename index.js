import express from 'express';
import {quotes, getAllQuotes } from './quotes.js';

// basic setup
const app = express();
const PORT = process.env.PORT || 3000;

// helper function
/*
  selects a random item from an array.
  @param {Array<any>} arr The array to pick from.
  @returns {any} A random element form the array.  
*/

const getRandomItem = (arr) => {
    if (!arr || arr.length == 0){
        return null;
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};

// API endpoints

// Root endpoint for a welcome message
app.get('/', (req,res) => {
  res.status(200).json({message:"koanAPI"});
});

// Endpoint to get a random "x" quote
app.get('/classic', (req,res) => {
  const quote = getRandomItem(quotes.classic);
  res.status(200).json({quote});
});

// Endpoint to get a random "y" quote
app.get('/paradox', (req,res) =>{
  const quote = getRandomItem(quotes.paradox);
  res.status(200).json({quote});
});

// Endpoint to get a random "z" quote
app.get('/simple', (req,res) =>{
  const quote = getRandomItem(quotes.simple);
  res.status(200).json({quote});
});

// Endpoint to get a completely random quote from all categories
app.get('/random', (req,res) =>{
  const allQuotes = getAllQuotes();
  const quote = getRandomItem(allQuotes);
  res.status(200).json({quote});
});

app.listen(PORT, () =>{
  console.log(`Server running on http://localhost:${PORT}`);
});