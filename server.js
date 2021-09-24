const express = require('express');
const budget = require('./models/budget');
const app = express();
PORT = 3000;

//API - MIDDLEWARE
const bodyParser = require('body-parser');

// Static
app.use(express.static('public'));

//DATABASE
const budgets = require('./models/budget');

//INDEX
app.get('/budgets', (req, res) => {
    res.render('index.ejs', { allBudgets: budgets });
});

//NEW
app.get('/budgets/new', (req, res) => {
            res.render('new.ejs');
});

//CREATE
app.post('/budgets', (req, res) => {
            console.log('HI')
        })

//SHOW
app.get('/budgets/:index', (req, res) => {
            res.render('show.ejs', { budgets: budgets[req.params.index] });
});



//Express Web Server port - app.listen
app.listen(PORT, () => {
            console.log('listening')
        });