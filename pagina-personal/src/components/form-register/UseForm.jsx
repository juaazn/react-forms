import { useState } from 'react'

export default function () {
  const [data, setData] = useState({ name: '', email: '' })

  const handleInputChange  = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem(`user`, JSON.stringify(data))
  }

  return (
    <>
      <h2>Resgistrarse</h2>
      <form className='container_user_register_form' onSubmit={handleSubmit}>
        <input type="text" name='name' onChange={handleInputChange } />
        <input type="email" name='email' onChange={handleInputChange } />
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}
