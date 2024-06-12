import { useState } from "react"

const App = () => {
  const [oneUser, setOneUser] = useState({fullName: "", email: "", age: ""})
  const [users, setUsers] = useState([])

  const formChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setOneUser({...oneUser, [name]: value})
  }

  const formSubmit = (event) => {
    event.preventDefault()

    // Validace 
    if (oneUser.fullName && oneUser.email && oneUser.age) {
      const newUser = {...oneUser, id: new Date().getTime()}
      setUsers((users) => {
        return [...users, newUser]
      })
      setOneUser({fullName: "", email: "", age: ""})
    } else {
      alert("Něco nebylo vyplněno")
    }
  }
  
  return <article>
    <form onSubmit={formSubmit}>
      <input 
        className="user-info" 
        type="text" 
        placeholder="Jméno:"
        value={oneUser.fullName}
        onChange={formChange}
        name="fullName"
      />
      <input
        className="user-info"
        type="email" 
        placeholder="E-mail:" 
        value={oneUser.email}
        onChange={formChange}
        name="email"
      />
      <input
        className="user-info"
        type="number" 
        min={0}
        placeholder="Věk:" 
        value={oneUser.age}
        onChange={formChange}
        name="age"
      />
      <input type="submit" />
    </form>

    {users.map((oneUser) => {
      const {id, fullName, email, age} = oneUser

      return <div className="item" key={id}>
        <p>ID: {id}</p>
        <p>Jméno: {fullName}</p>
        <p>Email: {email}</p>
        <p>Věk: {age}</p>
      </div>
    })}
  </article>
}

export default App