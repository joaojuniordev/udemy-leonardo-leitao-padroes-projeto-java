import CountryRulesAbstractFactory from "./CountryRulesAbstractFactory"
import BrazilianCertificate from "../../model/certificate/BrazilianCertificate"
import Certificate from "../../model/certificate/Certificate"
import BrazilianPacking from "../../model/packing/BrazilianPacking"
import Packing from "../../model/packing/Packing"


class BrazilianRulesAbstractFactory implements CountryRulesAbstractFactory {

	public getCertificates():Certificate {
		return new BrazilianCertificate()
	}

	public getPacking():Packing {
		return new BrazilianPacking()
	}
}

export default BrazilianRulesAbstractFactory
