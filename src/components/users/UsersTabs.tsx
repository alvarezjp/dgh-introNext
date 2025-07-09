import { MessageType } from "@/types/message.types"
import Message from "../messages/Message"
import { useState } from "react"

type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[],
}

enum TabView {
    MESSAGES,REPLIES
}

const UsersTabs = ({ messages, replies }: UserTabsProps) => {

    const [tab,setTab]=useState<TabView>(TabView.MESSAGES);

    return (
        <>
            <div className="flex justify-evenly mb-4">
                <div className="cursor-pointer border-b-2 border-blue-400"> Mensajes</div>
                <div className="cursor-pointer"> Respuestas</div>
            </div>
            <div>
                {messages.map((message, index) =>
                    <Message key={index} message={message} />

                )}

            </div>
        </>
    )
}

export default UsersTabs