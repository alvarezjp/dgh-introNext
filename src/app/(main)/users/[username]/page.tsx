
const UserPage = ({ params }: { params: { username: string } }) => {
    return (
        <div>
            <h1>Nombre de usuerio: {params.username}</h1>
            
        </div>
    )
}

export default UserPage