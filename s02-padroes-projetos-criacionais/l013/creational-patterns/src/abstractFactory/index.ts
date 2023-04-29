/**
 * @ABSTRACT_FACTORY Prover uma interface para criar famílias de objetos relacionados ou 
 *                   dependentes sem especificar suas classes concretas. (GoF)
 * 
 * @PROBLEMA COMO POSSO ESCREVER UM CÓDIGO ONDE AS CLASSES INSTANCIADAS POSSAM VARIAR DENTRO DE UMA MESMA INTERFACE?
 *           COMO GARANTIR QUE UM CONJUNTO DE OBJETOS RELACIONADOS (OU DEPENDENTES) POSSAM SER CRIADOS MANTENDO O CONTEXTO ÚNICO?
 * @SOLUCAO  + EXTRAIR A LÓGICA DE CRIAÇÃO DOS OBJETOS PARA UM ABSTRACT FACTORY.
 *           + CRIAR UMA IMPLEMENTAÇÃO DO ABSTRACT FACTORY PARA CADA CONTEXTO, GARANTINDO QUE TODOS OS OBJETOS CRIADOS ESTEJAM RELACIONADOS.
 */

/** 
 * @EXE Remover o comentario para executar o(s) exemplo(s)
 */
// import ClientAppleAF from "./apple/ClientAF"
// ClientAppleAF()

// import ClientAppAF from "./app/service/ClientAF"
// ClientAppAF()
