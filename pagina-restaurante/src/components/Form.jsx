import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form () {
  const initialState = { name: '', date: '', email: '' }

  const [ data, setData ] = useState({name: '', date: '', email: ''})
  const [message, setMessage] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const navigate = useNavigate()


  const handleInputChange = (event) => {
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
    window.localStorage.setItem('menu', JSON.stringify(data))
    clearState()
    setTimeout(() => {
      navigate('/home')
    }, 2000)
  }

  const clearState = () => setData({ ...initialState })

  return (
    <>
      <form className='form_restaurant' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input type="text" name="name" id="name" value={data.name} onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="email">Correo: </label>
          <input type="email" name='email' id='email' value={data.email} onChange={handleInputChange}/>
        </div>
        <div>
          <label htmlFor="date">Fecha: </label>
          <input type="date" name="date" id="date" value={data.date} onChange={handleInputChange}/>
        </div>

        <input type="submit" value="Enviar" disabled={btnDisabled}/>
        <p style={{'color': 'red'}}>{message}</p>
      </form>
    </>
  )
}
