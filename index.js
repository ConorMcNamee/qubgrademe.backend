const express = require('express')

const app = express();

const PORT = 3000;
const HOST = "localhost";

app.get('/info', (req, res) => {
    res.send('This is a proxy service which proxies to Billing and Account APIs.');
 });

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });
