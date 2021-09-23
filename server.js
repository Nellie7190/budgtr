const express = require('express');
const budget = require('./models/budget');
const app = express();
PORT = 3000;

//DATABASE
const budgets = require('./models/budget');

//INDEX
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {allBudgets: budgets});
});

//SHOW
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {budgets: budgets[req.params.index]})
})


//Express Web Server port - app.listen
app.listen(PORT, () => {
    console.log('listening')
});