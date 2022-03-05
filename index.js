const server = require('./api/server');
const { PORT } = require('./api/secrets/index');

server.listen(PORT, () => {
    console.log(`Server Is Live On Port: ${PORT}`);
})