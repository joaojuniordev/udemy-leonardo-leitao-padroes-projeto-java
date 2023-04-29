import Certificate from "./Certificate"

class USCertificate implements Certificate {

	public applyCertification():string {
		return "\t- Calibrating US rules"
	}
}

export default USCertificate
