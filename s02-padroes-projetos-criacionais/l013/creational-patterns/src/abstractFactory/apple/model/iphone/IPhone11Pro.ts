import CountryRulesAbstractFactory from "../../factory/abstractFactory/CountryRulesAbstractFactory"
import IPhone from "./IPhone"

class IPhone11Pro extends IPhone {
	constructor(rules:CountryRulesAbstractFactory){
		super(rules)
	}
	getHardware():void {
		console.log("Hardware list") 
		console.log("\t- 6.5in Screen") 
		console.log("\t- A13 Chipset") 
		console.log("\t- 4Gb RAM") 
		console.log("\t- 512Gb Memory") 
	}
}

export default IPhone11Pro