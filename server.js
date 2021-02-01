const express = require('express');
const { sequelize } = require('./models/Tag');
const routes = require('./routes');
// import sequelize connection
// NOTE: Errors pop up if this is uncommented. Already declared at line 2.
// const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// True: clears the table
// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
