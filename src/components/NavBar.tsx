import '../styles/nav-bar.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavBarButton } from './NavBarButton';

export const NavBar: React.FC = () => {
  return (
    <nav id="nav-bar" className="sticky">
      <div className="link-wrapper">
        <NavBarButton dest="#bio" title="Bio" />
        <NavBarButton dest="#projects" title="Projects" />
        <NavBarButton dest="#tech-stack" title="Tech" />
        <NavBarButton dest=".contact" title="Contact" />
        <div className="link-wrapper-right">
          <div>
            <a href="https://github.com/dyson1602" target="popup">
              <FaGithub />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/christopher-michael-clark/" target="popup">
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a href="" target="popup">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
