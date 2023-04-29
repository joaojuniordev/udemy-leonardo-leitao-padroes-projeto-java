import IPhoneFactory from "./IPhoneFactory"
import IPhone11 from "../../model/IPhone11"
import IPhone from "../../model/IPhone"


class IPhone11Factory extends IPhoneFactory{
    createIPhone(): IPhone {
		return new IPhone11()
	}
}

export default IPhone11Factory