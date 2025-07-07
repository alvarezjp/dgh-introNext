import Message from "@/components/messages/Message"
import Link from "next/link"

const MessagesPage = () => {
    const message = [
        {
            name: 'Juan Perez',
            username: 'juanPe',
            message: 'Tercer mensaje',
            repliesCount: 13
        },
        {
            name: 'Pepito Contreras',
            username: 'PContreras',
            message: 'Cuarto Mensaje',
            repliesCount: 13
        }
    ]

    return (
        <div>
            <main className="flex flex-col bg-gray-100 p-8">
                <section className="flex flex-col mb-8">
                    {message.map((message, index) =>
                       <Message key={index} message={message} />)}
                </section>
            </main>
        </div>
    )
}

export default MessagesPage