"use client"
import { useRouter } from "next/navigation"

function Users({ users }) {
  const router = useRouter()
  return (
    <ul className="list-group">
        {users.map(user => (
          <li key={user.id}
          className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <p>{user.first_name} {user.last_name}</p>
            <img src={user.avatar} alt={user.first_name} style={{borderRadius: "50%"}}/>
          </li>
        ))}
      </ul>  
  )
}

export default Users