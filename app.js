const path = require('path');
const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.route');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(authRoutes);

db.connectToDatabase()
.then(function(){
    app.listen(3000);
})
.catch(function(error){
    console.log('Failed to connect to database');
    console.log(error);
});
