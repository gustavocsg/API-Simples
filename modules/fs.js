const { ifError } = require("assert");
const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta
// fs.mkdir(path.join(__dirname,'/test'), (error) => {
//     if(error) {
//         return console.log('Erro: ', error);
//     }

//     console.log('Pasta criada com sucesso!');
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo adicionado com sucesso!");

    // Adicionar á um arquivo - dentro do metodo async (writeFile)
    fs.appendFile(
      path.join(__dirname, "test", "test.txt"),
      "hello world!",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }

        console.log("Arquivo modificado com sucesso!");
      }
    );

    // Ler arquivo - dentro do metodo async (writeFile)
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro: ", error);
        }

        console.log(data);
      }
    );
  }
);

//     // Sobrescreve o arquivo de cima
// fs.writeFile(path.join(__dirname, '/test', 'test.txt'),
// 'hello world!',
// (error) =>{
//     if(error) {
//         return console.log("Erro: ", error);
//     }

//     console.log("Arquivo adicionado com sucesso!");
// });

// Adicionar á um arquivo - fora do metodo async (writeFile)
// fs.appendFile(
//   path.join(__dirname, "test", "test.txt"),
//   "hello world!",
//   (error) => {
//     if (error) {
//       return console.log("Erro:", error);
//     }

//     console.log("Arquivo modificado com sucesso!");
//   }
// );

// // Ler arquivo - fora do metodo async (writeFile)
// fs.readFile(
//   path.join(__dirname, "/test", "test.txt"),
//   "utf8",
//   (error, data) => {
//     if (error) {
//       return console.log("Erro: ", error);
//     }

//     console.log(data);
//   }
// );
