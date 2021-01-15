//core modules
const path = require('path');//Node core module
//core modules End



//Imported modules
const express = require('express');
const app = new express();//Express method
//Imported modules End









console.log(path.join(__dirname, '../public'));
app.use(express.static());






//get() defines the route and callback
//the callback defines what happens when we hit that route

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About page</h1>');
});

app.get('/weather', (req, res) => {
    res.send('<h1>Weather page</h1>');
});

app.get('/help', (req, res) => {
    res.send({
        name: 'Ryan',
        Age: 35
    })
})












app.listen(3000, () => {
    console.log('server is up...')
});