import Certificate from "../../model/certificate/Certificate"
import Packing from "../../model/packing/Packing"

abstract class CountryRulesAbstractFactory {
    abstract getCertificates():Certificate
    abstract getPacking():Packing
}

export default CountryRulesAbstractFactory