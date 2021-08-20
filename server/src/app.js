const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use('/chat', chatRoutes);

app.listen(port);
