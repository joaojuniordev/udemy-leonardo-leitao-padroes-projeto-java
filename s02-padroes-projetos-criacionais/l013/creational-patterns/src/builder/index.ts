/** 
 * @BUILDER     Separar a construção de um objeto complexo de sua representação para que o mesmo processo de 
 *              construção possa criar representações diferentes. (GoF)
 * 
 * @PROBLEMA    Como uma classe pode criar DIFERENTES representacoes de um mesmo OBJETO COMPLEXO?
 *              R. Criar varios construtores diferentes? (IMPRODUTIVO)
 * @SOLUCAO     + Delegar a criação do objeto para um BUILDER ao inves de instanciar-lo diretamente.
 *              + Dividir a criacao em partes
 *              + Encapsular a criacao e montagem dessas partes em um BUILDER separado.
 */

/**
 * @MEAL Remover o comentario para executar o(s) exemplo(s)
 */
// import ClientBeforeMeal from "./meal/before/ClientMeal"
// ClientBeforeMeal()

// import ClientAfterMeal from "./meal/after/ClientMeal"
// ClientAfterMeal()

// import ClientFuentMeal from "./meal/fluent/ClientMeal"
// ClientFuentMeal()

// import ClientFuncMeal from "./meal/functional/ClientMeal"
// ClientFuncMeal()

/**
 * @SPOLLETO Remover o comentario para executar o(s) exemplo(s)
 */
// import ClientBeforeSpolleto from "./spolleto/before/ClientSpolleto"
// ClientBeforeSpolleto()

// import ClientAfterSpolleto from "./spolleto/after/ClientSpolleto"
// ClientAfterSpolleto()

// import ClientFluentSpolleto from "./spolleto/fluent/ClientSpolleto"
// ClientFluentSpolleto()

// import ClientFuncSpolleto from "./spolleto/functional/ClientSpolleto"
// ClientFuncSpolleto()