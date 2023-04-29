import IPhoneFactory from "./IPhoneFactory"

import CountryRulesAbstractFactory from "./abstractFactory/CountryRulesAbstractFactory"
import IPhone from "../model/iphone/IPhone"
import IPhoneX from "../model/iphone/IPhoneX"
import IPhoneXSMax from "../model/iphone/IPhoneXSMax"

class IPhoneXFactory extends IPhoneFactory {
	
	constructor(rules:CountryRulesAbstractFactory) {
		super(rules)
	}

	public createIPhone(level:string):IPhone {
		if(level==="highEnd") {
			return new IPhoneXSMax(this.rules)
		}else{//standard
			return new IPhoneX(this.rules)
		} 		 
	}

}

export default IPhoneXFactory
