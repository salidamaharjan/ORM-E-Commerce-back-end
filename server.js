const express = require("express");
const routes = require("./routes");

// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

runProgram();

// sync sequelize models to the database, then turn on the server
async function runProgram() {
  await sequelize.sync({ force: false});
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

}
