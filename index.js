const express = require("express");
const path = require("path");
//JO YE CONST K AAGE PATH H ISKI JAGHE PER KUCH OR BHI NAME USE KER SKTE HAI FIR SAB JADHE PER YHI USE KERNA HOGA 

const app = express();     
//app KI JAGHE PER KUCH OR BHI NAME USE KER SKTE HAI FIR SAB JADHE PER YHI USE KERNA HOGA 
const port = 80;
// const fs = require("fs");
 
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
//ye URL h /static  or static ye folder h 

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.html', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.html', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
