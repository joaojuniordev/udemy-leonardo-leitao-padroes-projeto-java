import IPhone from "../../model/IPhone"
import IPhone11 from "../../model/IPhone11"
import IPhone11Pro from "../../model/IPhone11Pro"
import IPhoneX from "../../model/IPhoneX"
import IPhoneXSMax from "../../model/IPhoneXSMax"


class IPhoneSimpleFactory{
    
    public static orderIPhone = (generation:string, level:string):IPhone => {
        const device: IPhone = this.createIPhone(generation, level)
        this.startDevice(device)
        return device
    }

    protected static createIPhone = (generation:string, level:string):IPhone =>{
        if(generation.toLowerCase()==="x") { return this.createIPhoneX(level) }
        // Default: 11 
        return this.createIPhone11(level)
    }

    protected static createIPhoneX = ( level:string):IPhone =>{
        if(level.toLowerCase()==="highend") {
            return new IPhoneXSMax()
        }
        return new IPhoneX()// Default
    }

    protected static createIPhone11 = ( level:string):IPhone =>{
        if(level.toLowerCase()==="highend") {
            return new IPhone11Pro()
        }
        return new IPhone11()// Default
    }

    protected static startDevice = (device: IPhone):IPhone => {
        if(device != null){
            device.getHardware()
            device.assemble()
            device.certificates()
            device.pack()
        }
        return device
    }
}

export default IPhoneSimpleFactory