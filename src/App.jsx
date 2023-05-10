import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
  }
  return (
    <>
      <h1>Users Management Client Site {users.length}</h1>

      <form onSubmit={handleAddUser}>
        <input type="text" name='name' />
        <br />
        <input type="email" name='email' />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <div>
        {
          users.map(user => <p key={user.id}>id: {user.id} Name:{user.name} Gmail: {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
