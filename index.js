const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`\n API server for something running on port ${PORT}!`);
    console.log(" N.B.: I'm pretty sure it's listening for \"activities\", in a database that hasn't been populated.");
  });
});