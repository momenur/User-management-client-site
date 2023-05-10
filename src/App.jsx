import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <>
      <h1>Users Management Client Site {users.length}</h1>
    </>
  )
}

export default App
