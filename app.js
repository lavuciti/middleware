const express = require('express');
const app = express();


//umesto da pozivamo funkciju za svaki app.get mi cemo napisati samo ovo ispod
//ovako se uobicajeno pise
// ako ne stavimo /contact tada ce midlwear biti za sve get-ove moze i drugacije ovo da se koristi pogledaj ispod
// app.use('/contact', function( req, res, next){
//     console.log('We got request' + req.originalUrl);
//     next()
// })

const info = (req, res, next) => {
    console.log('Radi');
    next();
}

function display(req, res, next){
    console.log('Display !!!');
    next()
}

const logger = [info, display]


app.get('/', (req, res) => { //request
    //info(req, res);
    res.send("Home page")    //response
})
app.get('/contact', (req, res) => { //request
    //info(req, res);
    res.send("Contact page")    //response
})
//ako stavimo ovde info ili logger pokrenuce se te midlewere funkcije stim da kada stavimo logger pokrecu se 2 funkcije
app.get('/about', logger, (req, res) => { //request
    //info(req, res);
    res.send("About page")    //response
})

app.listen(3000, ()=>{
    console.log('Server running ...');
})