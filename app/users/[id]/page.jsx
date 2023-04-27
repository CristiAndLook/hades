async function getUser(id) {
  // ...  fetch user data
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data

}

async function UsersPage({params}) {
  const user = await getUser(params.id)
  return (
    <div>
      <h1>User Page</h1>
      <img src={user.avatar} alt={user.first_name} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
    
    </div>
  )
}

export default UsersPage