const Users = require('../Models/users');

function AddUser (username, hash){

  const newUser = Users({
    Username: username,
    Password: hash
})
newUser.save()
	.then(user => {
	})
}


function GetUser (username, cb){
  Users
	.findOne({Username: username})
	.then(user => {
    cb(user)
	})
}

function GetInfo (id, cb){
  Users.find({id: id})
	.then(user => {
		cb({
			userid: user._id,
			todos: user.todos,
			username:user.Username
		})
	})
}


module.exports = {AddUser, GetUser, GetInfo }