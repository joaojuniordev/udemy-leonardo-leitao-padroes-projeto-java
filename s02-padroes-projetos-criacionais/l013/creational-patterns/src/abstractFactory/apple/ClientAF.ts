/**
 * @AbstractFactory Quando pensar em familia de objetos, deve-se pensar em AF.
 * @Family          Neste exemplo, os iphone serão criado de acordo com as regras de cada País (Certificado, empacotamento...).
 *                  Com isso, temos Fabricas abstratas que recebem as regras(rules) de cada País.
 */
import IPhone11Factory from "./factory/IPhone11Factory"
import IPhoneFactory from "./factory/IPhoneFactory"
import IPhoneXFactory from "./factory/IPhoneXFactory"
import BrazilianRulesAbstractFactory from "./factory/abstractFactory/BrazilianRulesAbstractFactory"
import CountryRulesAbstractFactory from "./factory/abstractFactory/CountryRulesAbstractFactory"
import IPhone from "./model/iphone/IPhone"


export default ()=>{
    console.log("\n\n### ABCTRACT FACTORY::APPLE ###")

    console.log("\n\n### IPhone 11 ")
    const rules: CountryRulesAbstractFactory  = new BrazilianRulesAbstractFactory()
    const genXFactory:IPhoneFactory  = new IPhoneXFactory(rules)
    const gen11Factory:IPhoneFactory = new IPhone11Factory(rules)
    
    console.log("### Ordering an iPhone X")
    const iphone:IPhone = genXFactory.orderIPhone("standard")
    console.log(iphone)
    
    console.log("\n\n### Ordering an iPhone 11 HighEnd")
    const iphone2:IPhone = gen11Factory.orderIPhone("highEnd")
    console.log(iphone2)
    
}