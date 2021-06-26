import '../../styles/nav-bar.css';
import { NavBarButton } from './NavBarButton';


export const NavBar: React.FC = () => {
  
  const clickAction = (dest: string) => {
    console.log('clicked')
  }

  return (
    <nav id="nav-bar" className="sticky">
      <div className="link-wrapper">
        <NavBarButton dest="#bio" title="Bio" />
        <NavBarButton dest="#projects" title="Projects" />
        <NavBarButton dest="#tech-stack" title="Tech Stack" />
        <NavBarButton dest="#contact" title="Contacts" />
      </div>
    </nav>
  );
};
