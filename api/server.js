const express = require('express');

const helmet = require('helmet');

const cors = require('cors');

const authRouter = require('./auth/auth-router');

const clientsRouter = require('./clients/clients-router');

const classesRouter = require('./classes/classes-router');

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


module.exports = server;