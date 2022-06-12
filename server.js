const express = require('express');
const path = require('path');

const logger = require('morgan');

require('dotenv').config()
require('./config/database.js')

const app = express();

app.use(logger('dev'));
app.use(express.json());


// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/cocktails', require('./routes/api/cocktails'))
app.use('/api/mixtapes', require('./routes/api/mixtapes'))
app.use('/api/moods', require('./routes/api/moods'))
app.use('/api/tags', require('./routes/api/tags'))
// app.use(require('./config/auth'));

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});