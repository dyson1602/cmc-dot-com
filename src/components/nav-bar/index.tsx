import './nav-bar.css';
import { NavBarButton } from './nav-bar-button';


export const NavBar: React.FC = () => {
  
  const clickAction = (dest: string) => {
    console.log('clicked')
  }

  return (
    <nav id="nav-bar" className="sticky">
      <div className="link-wrapper">
        <NavBarButton dest="#bio" title="Bio" clickAction={clickAction}/>
        <NavBarButton dest="#projects" title="Projects" clickAction={clickAction}/>
        <NavBarButton dest="#tech-stack" title="Tech Stack" clickAction={clickAction}/>
        <NavBarButton dest="#contact" title="Contacts" clickAction={clickAction}/>
      </div>
    </nav>
  );
};
