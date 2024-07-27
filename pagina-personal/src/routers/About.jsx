import Layout from '../Layout/Layout'

export default function About () {
  const data = window.localStorage.getItem('user')
  const user = JSON.parse(data)
  console.log(data)


  return (
    <Layout>
      <article className='container'>
        <h1>About</h1>
        <section>
          <h3>Bienvenido {user.name}</h3>
          <p>Tu correo se ha resgistrado correctamente<strong> {user.email}</strong></p>
        </section>
      </article>
    </Layout>
  )
}