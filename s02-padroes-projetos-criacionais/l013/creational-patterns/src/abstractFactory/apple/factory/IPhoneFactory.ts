import CountryRulesAbstractFactory from "./abstractFactory/CountryRulesAbstractFactory"
import IPhone from "../model/iphone/IPhone"

abstract class IPhoneFactory {
	rules:CountryRulesAbstractFactory
	
	constructor(rules:CountryRulesAbstractFactory) {
		this.rules = rules
	}

    orderIPhone = (level:string):IPhone=>{
        let device: IPhone 

        device = this.createIPhone(level)

		device.getHardware()
		device.assemble()
		device.certificates()
		device.pack()

        return device
    }

    abstract createIPhone(level:string):IPhone
}

export default IPhoneFactory
