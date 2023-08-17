const User = require("../../models/User")

const userCreate = async () => {
    const user ={
        firstName: "Laura",
        lastName: "Orjuela", 
        email:"lauramorjuelar@gmail.com",
        password:"lauramarcela30",
        phone:"3178779754"
    }
    await User.create(user)
}

module.exports = userCreate