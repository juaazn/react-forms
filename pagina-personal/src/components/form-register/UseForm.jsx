import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function () {
  const initialState = {
    name: '',
    email: '',
   }
   
  const [data, setData] = useState({ name: '', email: '' })
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleInputChange  = (event) => {
    if (data.name.length + 1 < 4) {
      setMessage('Name must be at least 3 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
      
    }

    setData({ ...data, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    window.localStorage.setItem(`user`, JSON.stringify(data))
    clearState()
    setTimeout(() => {
      navigate('/about')
    })
  }

  const clearState = () => {
    setData({ ...initialState })
  }

  return (
    <section className='register'>
      <h1>Resgistrarse</h1>
      <form className='container_user_register_form' onSubmit={handleSubmit}>
        <input className='input__data' value={data.name} type="text" name='name' placeholder='Nombre Completo' onChange={handleInputChange } />
        <input className='input__data' value={data.email} type="email" name='email' placeholder='name@gamil.com' onChange={handleInputChange } />
        <input className='input_submit' type="submit" value="Enviar" disabled={btnDisabled} />
        <p style={{'color': 'red'}}>{message}</p>
      </form>
    </section>
  )
}
