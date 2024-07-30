export default function Booking () {
  const handleSubmit = () => {
    return undefined
  }

  return (
    <main className='container'>
      <h1>Booking</h1>
      <p><strong>Reserva mesa</strong></p>
      <form className='form_restaurant' onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="date">Fecha: </label>
        <input type="date" name="date" id="" />
        <label htmlFor="correo">Correo: </label>
        <input type="email" />
        <input type="submit" value="Enviar" />
      </form>
    </main>
  )
}