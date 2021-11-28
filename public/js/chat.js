const socket = io()
const btn = document.querySelector("#increment")
socket.on("countUpdated", (count) => {
  console.log("The count ", count)
})
btn.addEventListener("click", () => {
  socket.emit("increment")
})
