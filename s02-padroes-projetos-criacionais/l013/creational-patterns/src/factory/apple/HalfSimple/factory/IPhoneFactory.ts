import IPhone from "../../model/IPhone"

abstract class IPhoneFactory{
    
    orderIPhone = (level:string)=>{
        let device: IPhone 

        device = this.createIPhone(level)

        if(device != null){
            device.getHardware()
            device.assemble()
            device.certificates()
            device.pack()
        }
        return device
    }

    abstract createIPhone(level:string):IPhone
}

export default IPhoneFactory