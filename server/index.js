import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { typeDefs }  from './graphql/typeDefs.js';
import resolvers from './graphql/resolvers.js';
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen : {port : 4000}
})

console.log('Server ready at port', 4000)
