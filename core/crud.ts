//CREATE
import fs from "fs"
// const fs = require("fs")
const DB_FILE_PATH = "./core/db"
console.log('crud')

//tipagem da interface TODO
interface Todo {
  date: string;
  content: string;
  done: boolean;
}

function create(content: string) {
  const todo: Todo = {
    date: new Date().toISOString(),
    content: content,
    done: false,
  }

  //cria uma array de todos para salvar mais de uma
  const todos:Array<Todo> = [
    ...read(),
    todo
  ]
  //salva os objetos todo no sistema db com espaçamento
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({todos}, null, 2))
  return content
}

//READ - lê a array de objetos em db, define que read deve mostrar uma Array de Todos
function read(): Array<Todo> {
  //carrega o arquivo como string
  const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8");
  //converte para o banco de dados (objeto JS)
  const db = JSON.parse(dbString || "{}")

  if(!db.todos) { //fail fast validation
    return []
  }
  return db.todos;
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, "")
}

CLEAR_DB()//limpa o banco antes de começar uma simulação
console.log (create('primeira TODO'))
console.log (create('segunda TODO'))
console.log(read())
