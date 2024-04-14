const socket = io()

let nickname = ""
let allMessages = []

Swal.fire({
    title: "Write your nickname",
    input: "text",
    allowOutsideClick: false,
    inputValidator: value => !value && "Write your Nickname"
}).then(data => {
    nickname = data.value
    document.querySelector("#nickname").innerHTML = nickname
    socket.emit("nickname", nickname)
})

socket.on("messages", (messages) => {
    allMessages = messages
    document.querySelector("#allMessages").innerHTML = messages.map(each => each).join("")
})

document.querySelector("#messageInput").addEventListener("keyup", event => {
    if (event.key == "Enter") {
        const message = `<p>${nickname}: ${event.target.value}</p>`
        allMessages.push(message)
        socket.emit("allMessages", allMessages)
        event.target.value = ""
    }
})
