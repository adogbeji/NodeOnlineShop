const express = require('express')
const bodyParser = require('body-parser');


const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {  // 'catch-all' middleware to catch unhandled routes
    res.status(404).send('<h1>Page Not Found!</h1>');
});


app.listen(3000);