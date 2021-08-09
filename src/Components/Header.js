import { Link } from 'react-router-dom'

function Header(props){
    return (
        <nav className="nav">
            <div className="navleft">
                <Link to="/" className="navimg">
                    <img src="https://i.imgur.com/S10uG78.jpg" alt="" />
                </Link>
                {/* <Link to="/" className="navitem">
                    <div>Home</div>
                </Link> */}
                <Link to="/about" className="navitem">
                    <div>About</div>
                </Link>
                <Link to="/gallery" className="navitem">
                    <div>Gallery</div>
                </Link>
                <Link to="/location" className="navitem">
                    <div>Location</div>
                </Link>
            </div>
            <div className="navright">
                <Link to="/" className="navaptmt">
                    <button>BOOK APPOINTMENTS</button>
                </Link>
            </div>
        </nav>
    )
  } 
  
  export default Header