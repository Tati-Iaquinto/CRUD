const fs = require("fs")
const DB_FILE_PATH = "./core/db"
console.log('crud')

function create(content) {
  //salvar o content no sistema
  fs.writeFileSync(DB_FILE_PATH, content)
  return content
}

console.log (create('conteúdo teste'))