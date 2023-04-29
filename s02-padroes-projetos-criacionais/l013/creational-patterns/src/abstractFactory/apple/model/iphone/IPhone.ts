import CountryRulesAbstractFactory from "../../factory/abstractFactory/CountryRulesAbstractFactory"

abstract class IPhone {
	private rules: CountryRulesAbstractFactory

	constructor(rules:CountryRulesAbstractFactory){
		this.rules = rules
	}

    abstract getHardware():void
	
	assemble() {
		console.log("Assembling all the hardwares")
	}

	certificates() {
		console.log("Testing all the certificates")
		console.log(this.rules.getCertificates().applyCertification())
	}

	pack() {
		console.log("Packing the device")
		console.log(this.rules.getPacking().pack())
	}
}

export default IPhone