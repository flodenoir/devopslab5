const express = require('express');
const path = require('path');
const app = express();

const PORT = 80

app.get('/', function (req, res) {
    res.send('Hello world!');
})

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.get('/checkAppHealth', function (req, res) {
    res.send("App is ready");
});

app.listen(PORT, () => {
    console.log("Listening at %s", PORT);
})