import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; 

const Footer = () => {
    return (  
        <nav className="footer">
            <h3>©WriteScape⚡</h3>
            <div className="links">
                <a href="https://www.linkedin.com/in/amit-naik-79295028a/"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                <a href="https://github.com/AmitNaik96"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
            </div>
        </nav>
    );
}
 
export default Footer;