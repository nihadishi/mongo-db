const express = require('express');
const { webUserRoutes } = require('./routes/webUserRoutes');
require('dotenv').config()
const app = express();


app.use(express.json())
app.use('/api/users', webUserRoutes)

app.listen(3000);