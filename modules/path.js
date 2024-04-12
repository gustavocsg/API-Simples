const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Apenas o nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo atual
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
//console.log(__dirname);
console.log(path.join(__dirname,"test", "test.html"));