import Certificate from "./Certificate"

class BrazilianCertificate implements Certificate {

	public applyCertification():string {
		return "\t- Calibrating Brasilian rules\n\t- Applying Anatel's Stamp"
	}
}

export default BrazilianCertificate
