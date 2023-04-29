/**
 * @SIMPLE  Esse é um bom exemplo (ver as UML na S01) de Factory.
 *          Usando uma class concreta para Factory, ou seja, não é uma abstract class!
 */

import IPhoneSimpleFactory from "./factory/IPhoneSimpleFactory"


// Main
export default ()=>{
    console.log("\n\n### SIMPLE FACTORY ###")

    console.log("\n\n### Ordering an iPhone X")
    const iphoneX = IPhoneSimpleFactory.orderIPhone("X","standard")
    console.log(iphoneX)
    
    console.log("\n\n### Ordering an iPhone 11 HighEnd")
    const iphone11 = IPhoneSimpleFactory.orderIPhone("11","highEnd")
    console.log(iphone11)
}