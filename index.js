const express = require('express');
const mongoose = require('mongoose');
const key = require('./config/keys');

require('./services/passport');
require('./models/User');

const app = express();

mongoose.connect(key.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);