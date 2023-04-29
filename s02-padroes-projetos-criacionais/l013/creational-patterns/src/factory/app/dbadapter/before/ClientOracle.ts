/**
 * @COMENTARIO  Esse é o exemplo mais comum (ver as UML na S01), ou seja, sem Factory.
 * @PROBLEMA    Codigo amarrado ao Oracle DB. E se precisar trocar de Banco? ]
 * @SOLUCAO     Criar a conexao usando Factory.             
 */

import OracleDB from "./db/OracleDB"

//main
export default ()=>{
    console.log("### ORACLE DB ###")
    const db:OracleDB = new OracleDB()
    db.query("SELECT * FROM users")
    db.update("INSERT INTO users VALUES ('User', 25)")
}