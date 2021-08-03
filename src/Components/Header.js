import { Link } from 'react-router-dom'

function Header(props){
    return (
        <nav className="nav">
            <Link to="/" className="navimg">
                <img src="https://i.imgur.com/S10uG78.jpg" alt="" />
            </Link>
            <Link to="/" className="navitem">
                <div>Home</div>
            </Link>
            <Link to="/about" className="navitem">
                <div>About</div>
            </Link>
        </nav>
    )
  } 
  
  export default Header