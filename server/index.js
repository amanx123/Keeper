require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');
const cors = require('cors');
const connectDb = require('./config/db');
const schema = require('./schema/schema');
const port = process.env.PORT || 8000;
const app = express();


//connect to database
connectDb();

app.use(cors());

//using single endpoint graphql to serve requests
app.use(
 '/graphql',
 graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));
app.listen(port,console.log(`Server running on port ${port}`));

