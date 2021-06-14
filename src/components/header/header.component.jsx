import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as logo } from '../../assets/crown.svg'

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      <logo className="logo"></logo>
    </Link>
    
  </div>
)

export default Header;