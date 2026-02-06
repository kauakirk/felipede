const fs = require("fs");
const path = require("path");

// Criar pasta
//fs.mkdir(path.join(__dirname, "test"), (error) => {
//if (error) {
//  return console.log("Error:", error);
// }
// console.log("Pasta criada com sucesso");
//});

// Crar arquivo
fs.writeFile(
  path.join(__dirname, "test", "test.html"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("error : ", error);
    }
    console.log("pasta criada com sucesso");
  },
);

// Adicionar conteudo a um arquivio
fs.appendFile(
  path.join(__dirname, "/test", "test.html"),
  "Hello world!",
  (error) => {
    if (error) {
      return console.log("error: ", error);
    }
    console.log("arquivo modificado com sucesso");
  },
);

//ler arquivo

fs.readFile(
  path.join(__dirname, "../test", "test.html"),
  "utf-8",
  (error, data) => {
    if (error) {
      return console.log("error:", error);
    }

    console.log(data);
  },
);
