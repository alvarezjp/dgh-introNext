import Message from "@/components/messages/Message"
import Link from "next/link"

const UserPage = ({ params }: { params: { username: string } }) => {

    const user = {
        username: params.username,
        name: 'Juan Perez',
        bio: 'Vengo de putaendo',
        followersCount: 15,
        followingCount: 3,
        message: [
            {
                name: 'Juan Perez',
                username: 'juanito',
                message: 'segundo mensaje',
                repliesCount: 13
            },
            {
                name: 'Juan Perez',
                username: 'juanito',
                message: 'Primer Mensaje',
                repliesCount: 13
            }
        ],
        replies: [
            {
                message: 'Mi respuesta ',
                repliesCount: 0
            }

        ]

    }


    return (
        <main className="flex flex-col bg-gray-100 p-8">
            <section className="flex flex-col mb-8">
                <div className="rounded-full p-6 bg-gray-300 w-20 text-center mb-4">
                    <span className="font-semibold text-lg">JP</span>
                </div>
                <h2 className="mb-1">{user.name}</h2>
                <div className="text-md mb-4 text-gray-600 cursor-pointer">
                    <Link href={`/users/${user.username}`}> @{user.username}</Link>
                </div>
                <div className="mb-4">{user.bio}</div>
                <div className="flex justify-between mb-4">
                    <div>
                        <span className="font-semibold">{user.followersCount}</span> Seguidores
                    </div>
                    <div>
                        <span className="font-semibold">{user.followingCount}</span> Seguidos
                    </div>
                </div>
            </section>
           
        </main>
    )
}

export default UserPage