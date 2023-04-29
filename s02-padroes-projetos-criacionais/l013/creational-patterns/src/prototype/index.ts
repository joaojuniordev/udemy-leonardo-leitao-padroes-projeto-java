/** FAZ UM CLONE DO OBJETO **
 * @PROTOTYPE   Especificar os tipos de objetos a serem criados usando
 *              uma instância como protótipo e criar novos objetos ao copiar este protótipo. (GoF)
 * 
 * @PROBLEMA    COMO POSSO CRIAR UM OBJETO NOVO APROVEITANDO O ESTADO PREVIAMENTE EXISTENTE DE OUTRO OBJETO?
 * 
 * @SOLUCAO     DEFINIR UM PROTOTYPE QUE RETORNE A CÓPIA DE SI MESMO.
 */

/**
 * @EXE Remover o comentario para executar o(s) exemplo(s)
 */
// import ClientAnimationProto from "./animation/ClientProto"
// ClientAnimationProto()

// import ClientDeepProto from "./deepShallow/ClientProto"
// ClientDeepProto()

import ClientFuncProto from "./functionalCloneBuilder/ClientProto"
ClientFuncProto()