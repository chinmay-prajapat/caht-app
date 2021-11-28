const socket = io()
const btn = document.querySelector("#increment")
const input = document
  .querySelector("#message-form")
  .addEventListener("submit", (e) => {
    e.preventDefault()
    const message = e.target.elements.message.value
    socket.emit("sendMessage", message)
  })
socket.on("message", (message) => {
  console.log(message)
})
