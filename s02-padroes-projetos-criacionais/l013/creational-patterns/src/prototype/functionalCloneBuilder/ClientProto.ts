import Address from "./model/Address"
import User from "./model/User"

export default ()=>{
	console.log("\n\n### PROTOTYPE+BUILDER FUNCIONAL ###")
	const user:User = new User("ToClone", 25, new Address("ABC Street", 1000))
	console.log(user)

	const cloneUser:User = user.cloneBuilder().withName("Cloned++").now()
	console.log(cloneUser)

	const anotherUser:User = cloneUser.cloneBuilder()
			.withAge(100)
			.withAddress(new Address("A Street", 500))
			.now()
	console.log(anotherUser)

}