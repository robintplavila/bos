const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const mongoose = require('mongoose');
require('dotenv').config();

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  // Connect to MongoDB (commented out for demo)
  try {
    // await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/invoicing_system');
    console.log('MongoDB connection skipped for demo');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }

  // Create Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: process.env.PORT || 4000 },
    context: async ({ req }) => {
      // Add authentication context here later
      return { req };
    },
  });

  console.log(`🚀 Server ready at ${url}`);
}

startServer().catch((error) => {
  console.error('Error starting server:', error);
});