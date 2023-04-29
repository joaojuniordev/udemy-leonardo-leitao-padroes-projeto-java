/**
 * @BEFORE Esse é o exemplo mais comum (ver as UML na S01), ou seja, sem Factory.
 */

// Client.java
import IPhone       from "../model/IPhone"
import IPhone11     from "../model/IPhone11"
import IPhone11Pro   from"../model/IPhone11Pro"
import IPhoneX       from"../model/IPhoneX"
import IPhoneXSMax   from"../model/IPhoneXSMax"

const startDevice = (device: IPhone)=>{
    if(device != null){
        device.getHardware()
        device.assemble()
        device.certificates()
        device.pack()
    }
    return device
}

const orderIPhone = (generation="X", level="standard") => {
    
    let device: IPhone = new IPhone11()//Default

    if(generation==="11") {
        if(level==="standard") {
            device = new IPhone11()
        } else if(level==="highEnd") {
            device = new IPhone11Pro()
        } 
    }else if(generation==="X") {
        if(level==="standard") {
            device = new IPhoneX()
        } 
        else if(level==="highEnd") {
            device = new IPhoneXSMax()
        }
    }

    return startDevice(device)    
}

// Main
export default ()=>{
    console.log("\n\n### BEFORE NO-FACTORY ###")

    let iphone: IPhone
    let iphone11: IPhone11

    console.log("### Ordering an iPhone X")
    iphone = orderIPhone("X", "standard")
    console.log(iphone)
    
    console.log("\n\n### Ordering an iPhone 11 HighEnd")
    iphone11 = orderIPhone("11", "highEnd")
    console.log(iphone11)
}