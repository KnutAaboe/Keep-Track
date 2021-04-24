import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <div>
        <p><Link to='/'>Home</Link>  |  </p>
        <p><Link to='/about'>About</Link>  |  </p>
        <p><Link to='/about'>Profile</Link>  |  </p>
        <p><Link to='/feedback'>Feedback</Link></p>
      </div>
    </footer>
  )
}

export default Footer