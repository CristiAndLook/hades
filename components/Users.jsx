
function Users({ users }) {
  return (
    <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.first_name} {user.last_name}</p>
            <img src={user.avatar} alt={user.first_name} />
          </li>
        ))}
      </ul>  
  )
}

export default Users