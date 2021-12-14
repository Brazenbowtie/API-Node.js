async function routes(fastify, options) {   //async function suspends function execution until returned promise
    //Testing route
    fastify.get('/', async (request, reply) => {    //returns hello world if the route works
        return { hello: 'world' };
    });
}

module.exports = routes;    //module.exports syntax used when exporting one thing (Node.js)