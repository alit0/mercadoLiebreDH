const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, "./public");
const port = process.env.PORT || 3030

app.use(express.static(publicPath))

app.get("/", function (req, res) {
  res.send(`Levantando un servidor con Express ${port}`);
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.use(express.static('public'))

app.listen(8000, () => console.log("Levantando un servidor con Express"));