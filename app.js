const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve(__dirname, "./public");
const port = process.env.PORT || 3030;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.listen(port, () => console.log(`Levantando un servidor con Express en el puerto ${port}`));