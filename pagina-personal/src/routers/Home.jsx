import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'

export default function Home () {
  return (
  <Layout>
    <main className='container'>
      <h1>Home</h1>
      <p><strong>Hola, vamos a registrarnos con el siguiente formulario</strong></p>
      <Link className='button_contact' to={'contact'}>Registrase</Link>
    </main>
  </Layout>
  )
} 