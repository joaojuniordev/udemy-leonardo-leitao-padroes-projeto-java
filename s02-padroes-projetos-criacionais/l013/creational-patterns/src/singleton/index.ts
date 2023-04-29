/**
 * @SINGLETON Garantir que uma classe só tenha uma única instância, e prover um ponto de acesso global a ela. (GoF)
 * 
 * @PROBLEMA COMO POSSO GARANTIR QUE UMA CLASSE TENHA APENAS UMA INSTÂNCIA?
 *           COMO FAZER COM QUE ESTA INSTÂNCIA ÚNICA POSSA SER ACESSÍVEL GLOBALMENTE?
 * 
 * @SOLUCAO + ESCONDER O CONSTRUTOR DESSA CLASSE ...
 *          + DEFINIR UM PONTO DE CRIAÇÃO ESTÁTICO QUE RETORNE ESTA INSTÂNCIA ÚNICA
 */

/** 
 * @EXE Remover o comentario para executar o(s) exemplo(s)
 */
// import ClientBeforeSG from "./connectionPool/before/ClientSG"
// ClientBeforeSG()

// import ClientAfterSG from "./connectionPool/after/ClientSG"
// ClientAfterSG()

// import ClientMonoSG from "./connectionPool/monostate/ClientSG"
// ClientMonoSG()