const socket = io()
const btn = document.querySelector("#increment")
const input = document
  .querySelector("#message-form")
  .addEventListener("submit", (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit("sendMessage", message, (error) => {
      if (error) {
        return console.log(error)
      }
      console.log("The message was delivered!")
    })
  })
socket.on("message", (message) => {
  console.log(message)
})

document.querySelector("#send-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser")
  }

  navigator.geolocation.getCurrentPosition(({ coords }) => {
    const { latitude, longitude } = coords
    socket.emit(
      "sendLocation",
      `https://google.com/maps?q=${latitude},${longitude}`,
    )
  })
})
