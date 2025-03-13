import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return (
        <>
            <header className='header'>
                <div className="header_content">
                    <p>International Conference on Smart Systems, Power Electronics Artificial Intelligence, Robotics and
                    Knowledge Engineering(SPARK'25)
                    </p>
                    <img src="/KPR main logo.webp" alt="KPRIET LOGO"/>
                </div>
            </header>
            <nav className="navbar">
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/call'>Call for Papers</Link></li>
                    <li><Link to='/speakers'>Speakers</Link></li>
                    <li><Link to='/schedule'>Schedule</Link></li>
                    <li className="dropdown-container" aria-haspopup="true" aria-expanded="false">
                        <Link to='/'>Call to Action &#x25BC;</Link>
                        <div className="dropdown">
                            <Link to='/'>Submit Paper</Link>
                            <Link to='/'>Register Now</Link>
                            <Link to='/'>Download Brochure</Link>
                            <Link to='/'>Workshops</Link>
                        </div>
                    </li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
                <div className="btn"><Link to='/'>Register Now</Link></div>
            </nav>
        </>
    )
}

export default Header;