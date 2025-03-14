import { Link } from 'react-router-dom'
import '../styles/footer.css'

function Footer() {
    return (
        <>
        <footer> 
        <div className="footer-container">
            <div className="footer-logo">
                <img src="../public/KPR learn beyond logo.png" alt="SPARK_2025 Logo"/>
            </div>
            <div className="footer-about">
                <h3>About Us</h3>
                <p>International Conference on Smart Systems, Power Electronics Artificial Intelligence, Robotics and
                    Knowledge Engineering(SPARK'25)</p>
            </div>
            <div className="footer-services">
                <h3>Services</h3>
                <ul>
                    <li><Link to='/'>Registration</Link></li>
                    <li><Link to='/'>Speakers</Link></li>
                    <li><Link to='/'>Call for Papers</Link></li>
                    <li><Link to='/'>Upcoming Sessions</Link></li>
                    <li><Link to='/'>Workshop</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <h3>Contact Us</h3>
                <ul className="social-icons">
                    <li><Link to='/'><i className="fa-brands fa-linkedin-in"></i></Link></li>
                    <li><Link to='/'><i className="fa-brands fa-x-twitter"></i></Link></li>
                    <li><Link to='/'><i className="fa-solid fa-phone"></i></Link></li>
                    <li><Link to='/'><i className="fa-solid fa-envelope"></i></Link></li>
                </ul>
            </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright &copy; 2025 KPR Institute of Engineering and Technology Developed by Team ZENITH</p>
        </div>
    </footer>
        </>
    )
}

export default Footer;