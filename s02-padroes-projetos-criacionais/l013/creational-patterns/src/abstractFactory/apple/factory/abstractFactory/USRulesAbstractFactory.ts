import CountryRulesAbstractFactory from "./CountryRulesAbstractFactory"
import Certificate from "../../model/certificate/Certificate"
import USCertificate from "../../model/certificate/USCertificate"
import Packing from "../../model/packing/Packing"
import USPacking from "../../model/packing/USPacking"

class USRulesAbstractFactory implements CountryRulesAbstractFactory {

	public getCertificates():Certificate {
		return new USCertificate()
	}

	public getPacking():Packing {
		return new USPacking()
	}
}

export default USRulesAbstractFactory
