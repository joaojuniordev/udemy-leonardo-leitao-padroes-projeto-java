import Address from "./model/Address"
import User from "./model/User"



export default ()=> {
	console.log("\n\n### PROTOTYPE DEEPSHALLOW ###")

	const user:User = new User("Clone", 25, new Address("ABC Street", 1000))
	console.log(user)
	
	const cloneUser:User = user.clone()
	cloneUser.name = "Clone x2"
	cloneUser.address.street = "Double Street"
	console.log(user)
	console.log(cloneUser)
}
