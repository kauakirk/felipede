const path = require("path");

//Basename
console.log(path.basename(__filename));

//Dir atual
console.log(path.dirname(__filename));

//Extensao do arquyivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// Juntar caminho de arqivos
console.log(path.join(__dirname, "test", "test.html"));

