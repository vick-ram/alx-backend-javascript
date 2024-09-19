const express = require('express');
const app = express();

const port = 7865;


app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
    res.json({
        payment_methods: {
            credit_cards: true,
            paypal: false
        }
    });
});

app.post('/login', express.json(), (req, res) => {
    const username = res.body.username;
    res.send(`Welcome ${username}`);
});

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`)
});