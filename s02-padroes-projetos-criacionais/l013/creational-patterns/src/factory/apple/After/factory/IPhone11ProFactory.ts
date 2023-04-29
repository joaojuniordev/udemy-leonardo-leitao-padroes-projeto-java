import IPhoneFactory from "./IPhoneFactory"
import IPhone11Pro from "../../model/IPhone11Pro"
import IPhone from "../../model/IPhone"


class IPhone11ProFactory extends IPhoneFactory{
    createIPhone(): IPhone {
		return new IPhone11Pro()
	}
}

export default IPhone11ProFactory