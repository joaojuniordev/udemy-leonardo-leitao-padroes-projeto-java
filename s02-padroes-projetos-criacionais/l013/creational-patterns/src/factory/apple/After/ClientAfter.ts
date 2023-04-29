/**
 * @AFTER       Esse é o exemplo mais complexo/'ruim' de Factory (ver as UML na S01).
 * @PROBLEMA    Se quiser outro IPhones terá que importar mais Factory.
 */

import IPhoneFactory from "./factory/IPhoneFactory"
import IPhone11ProFactory from "./factory/IPhone11ProFactory"
import IPhoneXFactory from "./factory/IPhoneXFactory"
import IPhone from "../model/IPhone"

// Main
export default ()=>{
    console.log("\n\n### AFTER FACTORY ###")

    const iphoneXFactory: IPhoneFactory = new IPhoneXFactory()
    const iphone11ProFactory: IPhoneFactory = new IPhone11ProFactory()
    
    console.log("\n\n### Ordering an iPhone X")
    const iphoneX:IPhone = iphoneXFactory.orderIPhone()
    console.log(iphoneX)

    console.log("\n\n### Ordering an iPhone 11 HighEnd")
    const iphone11Pro:IPhone = iphone11ProFactory.orderIPhone()
    console.log(iphone11Pro)
}