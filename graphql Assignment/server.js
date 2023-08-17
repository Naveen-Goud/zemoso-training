const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./Query");
const { db } = require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
    },
    context: {
        db,
    },
});

// Instead of server.listen(), you should create an http server and use its listen() method
server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
