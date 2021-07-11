import '../styles/nav-bar.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavBarButton } from './NavBarButton';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useElementStartPosition } from '../hooks/useElementStartPosition';
import { useState } from 'react';
import { useEffect } from 'react';

interface sectionPositions {
  bio: { x: number; y: number };
  projects: { x: number; y: number };
  techStack: { x: number; y: number };
  contact: { x: number; y: number };
}

export const NavBar: React.FC = () => {
  const [highlight, setHighlight] = useState<string | null>(null);
  const [sectionPositions, setSectionPositions] = useState({
    bio: useElementStartPosition('#bio'),
    projects: useElementStartPosition('#projects'),
    techStack: useElementStartPosition('#techStack'),
    contact: useElementStartPosition('.contact'),
  });

  useEffect(() => {
    const bioRect = document.querySelector(`#bio`)?.getBoundingClientRect();
    const bio = { x: bioRect?.left, y: bioRect?.top };

    const projRect = document
      .querySelector(`#projects`)
      ?.getBoundingClientRect();
    const projects = { x: projRect?.left, y: projRect?.top };

    const techStackRect = document
      .querySelector(`#tech-stack`)
      ?.getBoundingClientRect();
    const techStack = { x: techStackRect?.left, y: techStackRect?.top };

    const contactRect = document
      .querySelector(`.contact`)
      ?.getBoundingClientRect();
    const contact = { x: contactRect?.left, y: contactRect?.top };

    setSectionPositions({
      bio,
      projects,
      techStack,
      contact,
    });
  }, []);

  useScrollPosition(({ currPos }) => {
    const { bio, projects, techStack, contact } = sectionPositions;

    const landingDiff = Math.abs(currPos.y);
    const bioDiff = Math.abs(bio.y ? bio.y + currPos.y : 0);
    const projDiff = Math.abs(projects.y ? projects.y + currPos.y : 0);
    const techDiff = Math.abs(techStack.y ? techStack.y + currPos.y : 0);
    const contactDiff = Math.abs(contact.y ? contact.y + currPos.y : 0);

    const min = Math.min(landingDiff, bioDiff, projDiff, techDiff, contactDiff);

    if (bioDiff === min) setHighlight('bio');
    else if (projDiff === min) setHighlight('projects');
    else if (techDiff === min) setHighlight('tech');
    else if (contactDiff === min) setHighlight('contact');
    else setHighlight('');
  });

  return (
    <nav id="nav-bar" className="sticky">
      <div className="link-wrapper">
        <NavBarButton
          dest="#bio"
          title="Bio"
          highlight={highlight === 'bio' ? true : false}
        />
        <NavBarButton
          dest="#projects"
          title="Projects"
          highlight={highlight === 'projects' ? true : false}
        />
        <NavBarButton
          dest="#tech-stack"
          title="Tech"
          highlight={highlight === 'tech' ? true : false}
        />
        <NavBarButton
          dest=".contact"
          title="Contact"
          highlight={highlight === 'contact' ? true : false}
        />
        <div className="link-wrapper-right">
          <div>
            <a href="https://github.com/dyson1602" target="popup">
              <FaGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/christopher-michael-clark/"
              target="popup"
            >
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
