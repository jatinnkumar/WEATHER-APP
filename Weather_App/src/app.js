const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


const views_path = path.join(__dirname, "../templates/views");
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'hbs');
app.set("views", views_path);

app.get('/', (req, res) => {
    res.render('index')
});

app.listen('8000', () => {
    console.log('listening on port no. 8000');
});
