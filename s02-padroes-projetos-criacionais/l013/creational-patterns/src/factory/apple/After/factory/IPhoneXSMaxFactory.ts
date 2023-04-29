import IPhoneFactory from "./IPhoneFactory"
import IPhoneXSMax from "../../model/IPhoneXSMax"
import IPhone from "../../model/IPhone"


class IPhoneXSMaxFactory extends IPhoneFactory{
    createIPhone(): IPhone {
		return new IPhoneXSMax()
	}
}

export default IPhoneXSMaxFactory