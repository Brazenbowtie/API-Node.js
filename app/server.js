const fastify = require('fastify')({logger: true});
fastify.register(require('fastify-postgres'), {
    connectionString: `postgres://'${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_SERVICE}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
});

//Run Server
const start = () => {
    fastify.listen(3000, '0.0.0.0', (err, address) => {     //starts a server listening at port 3000 server.listen(port, hostname, backlog, callback)
        if (err) {                                          //exit process in event of error
            fastify.log.error(err);
            process.exit(1);
        }
    });
};
start();