const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@apisimples.ambaur6.mongodb.net/database?retryWrites=true&w=majority&appName=APISimples`
    )
    .then(console.log("Conexão com o banco de dados realizada com sucesso!"))
    .catch((error) => {
      console.log(
        "Ocorreu um erro ao se conectar com o banco de dados! Erro: ",
        error
      );
    });
};

module.exports = connectToDatabase;
