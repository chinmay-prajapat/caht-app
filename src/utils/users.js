const users = []

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()
  if (!username || !room) {
    return {
      error: "Username and room are required",
    }
  }
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })
  if (existingUser) {
    return {
      error: "Username is in use!",
    }
  }
  const user = { id, username, room }
  users.push(user)
  return {
    user,
  }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

addUser({
  id: 22,
  username: "Chinmay",
  room: "India",
})
addUser({
  id: 23,
  username: "Gaurav",
  room: "India",
})
addUser({
  id: 24,
  username: "Rajesh",
  room: "India",
})
addUser({
  id: 25,
  username: "Amit",
  room: "India",
})

const getUser = (id) => {
  const user = users.find((user) => user.id === id)

  return user
}
const getUsers = (room) => {
  const user = users.filter((user) => {
    user.room === room
  })
  if (!user) {
    return "Wrong names"
  }
  return user
}
// console.log(getUser(22))
console.log(getUsers("indi", "chinmay"))
