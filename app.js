const express = require('express');

const app = express();



app.get('/home', (req, res, next) => {
    res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (req, res, next) => {
    res.send('About')
})

app.get('/contact', (req, res, next) => {
    res.sendFile(`${__dirname}/views/contact.html`)
});


const port = 3000;
app.listen(port, () => console.log(`app listening at port ${port}`));