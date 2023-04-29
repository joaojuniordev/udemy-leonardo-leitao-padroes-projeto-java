import IPhoneFactory from "./IPhoneFactory"
import CountryRulesAbstractFactory from "./abstractFactory/CountryRulesAbstractFactory"
import IPhone from "../model/iphone/IPhone"
import IPhone11Pro from "../model/iphone/IPhone11Pro"
import IPhone11 from "../model/iphone/IPhone11"

class IPhone11Factory extends IPhoneFactory{
	
	constructor(rules:CountryRulesAbstractFactory){
		super(rules)
	}

    createIPhone(level:string):IPhone {
		if(level==="highEnd"){
			return new IPhone11Pro(this.rules)
		}else{//standard
			return new IPhone11(this.rules)
		}
	}
}

export default IPhone11Factory
