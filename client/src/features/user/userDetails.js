export default function UserDetails({ user }) {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>{user.name}</h1>
            <p>id: {user.id}</p>
            <p>tz: {user.tz}</p>
            <p>password: {user.password}</p>
            <p>telephone: {user.telephone}</p>

        </div>
    )
}