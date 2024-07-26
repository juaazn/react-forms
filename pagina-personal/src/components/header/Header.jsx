import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Header () {
  return (
    <>
      <header className='container_header'>
        <picture className='container_logo'>
          <Link className='link_logo' to={'/'}>
            <Logo />
          </Link>
        </picture>
          
        <ul className='container_menu'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
          <li><Link to={'/about'}>About</Link></li>
        </ul>
      </header>
    </>
  )
}