const express = require('express')


const app = express();


app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="user_input"><button type="submit">Add Product</button></form>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);