const express = require('express');
const { booksRoutes } = require('./routes/booksRoutes');
const { webUserRoutes } = require('./routes/webUserRoutes');
const { db } = require('./config/db');
require('dotenv').config();

const app = express();
db.connect();

app.use(express.json())
app.use('/api/users', webUserRoutes)
app.use('/api/books', booksRoutes)

app.listen(3001);