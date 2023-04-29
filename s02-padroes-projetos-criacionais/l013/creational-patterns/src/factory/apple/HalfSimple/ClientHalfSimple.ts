/**
 * @HALF  Esse é um bom exemplo (ver as UML na S01) de Factory.
 *        Porém, ainda precisa de muitas Factories (nesse caso temos 3) ...
 */

import IPhoneFactory from "./factory/IPhoneFactory"
import IPhone11Factory from "./factory/IPhone11Factory"
import IPhoneXFactory from "./factory/IPhoneXFactory"
import IPhone from "../model/IPhone"

// Main
export default ()=>{
    console.log("\n\n### HALF SIMPLE FACTORY ###")

    let iphoneXFactory: IPhoneFactory = new IPhoneXFactory()
    let iphone11ProFactory: IPhoneFactory = new IPhone11Factory()
    
    console.log("\n\n### Ordering an iPhone X")
    const iphoneX:IPhone = iphoneXFactory.orderIPhone("standart")
    console.log(iphoneX)

    console.log("\n\n### Ordering an iPhone 11 HighEnd")
    const iphone11Pro:IPhone = iphone11ProFactory.orderIPhone("highEnd")
    console.log(iphone11Pro)
}