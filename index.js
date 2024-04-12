// const { Person } = require("./person");
const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");

dotenv.config();

connectToDatabase();

// require("./modules/path"); // Aprendendo mais sobre o modulo Path
// require("./modules/fs"); // Aprendendo mais sobre o modulo Fs
// require("./modules/http"); // Aprendendo mais sobre o modulo HTTP - nativo do Node

require("./modules/express"); // Aprendendo mais sobre o modulo Express

// const person = new Person("Gustavo"); // Classe Person

//console.log(person.sayMyName());
