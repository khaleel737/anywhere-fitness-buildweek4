const server = require('./api/server');
const { PORT } = require('./api/secrets/index');

   
const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

server.listen(PORT, () => {
    console.log(`Server Is Live On Port: ${PORT}`);
})