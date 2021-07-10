import '../styles/nav-bar.css';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

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
          <IconContext.Provider value={{ color: 'white', size: '35px' }}>
            <DiGithubBadge />
            <FaLinkedin />
            <FaTwitter />
          </IconContext.Provider>
        </div>
      </div>
    </nav>
  );
};
