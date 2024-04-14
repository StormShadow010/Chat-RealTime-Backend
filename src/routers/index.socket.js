import { socketServer } from "../../server.js"

let messages = []

export const socketCB = async (socket) => {
    socket.on("nickname", async (nickname) => {
        messages.push(`User: ${nickname} is online`)
        socketServer.emit("messages", messages)
    })

    socket.on("allMessages", async (allMessages) => {
        messages = allMessages
        socketServer.emit("messages", messages)
    })
}

