const express = require('express');
const { ApolloServer} = require('apollo-server-express');

// load schema & resolvers

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const db = require('./connectDb')
db.connect()
const server = new ApolloServer({
    typeDefs,
    resolvers
})
const app = express();

async function startServer() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();


const port = 8866;
app.listen({port}, () => {
    console.log(`Server listening on http://localhost:${port}${server.graphqlPath}`)
})