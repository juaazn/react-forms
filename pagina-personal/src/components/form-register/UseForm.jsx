import { useState } from 'react'

export default function () {
  const [data, setData] = useState({ name: '', email: '' })

  const handleSubmit = () => {
    return null
  }

  const handleInputChange  = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    console.log(data)
  }

  return (
    <>
      <h2>Resgistrarse</h2>
      <form className='container_user_register_form' onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange } />
        <input type="email" onChange={handleInputChange } />
        <input type="submit" value="Enviar" />
      </form>
    </>
  )
}
  