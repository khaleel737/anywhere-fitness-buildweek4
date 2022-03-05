const { PORT } = require('./api/secrets/index');

   
const express = require('express');

const helmet = require('helmet');

const cors = require('cors');

const authRouter = require('./api/auth/auth-router');

const clientsRouter = require('./api/clients/clients-router');

const classesRouter = require('./api/classes/classes-router');

const server = express();

server.use(helmet());

server.use(express.json());

server.use(cors());

server.use('/api/auth', authRouter);

server.use('/api/clients', clientsRouter);

server.use('/api/classes', classesRouter)


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})



server.listen(PORT, () => {
    console.log(`Server Is Live On Port: ${PORT}`);
})

module.exports = server;