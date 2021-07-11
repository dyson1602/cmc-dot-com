import '../styles/nav-bar.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { NavBarButton } from './NavBarButton';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useElementStartPosition } from '../hooks/useElementStartPosition';
import { useState } from 'react';
import { useEffect } from 'react';

interface sectionPositions {
  bio: { x: number; y: number } | undefined;
  projects: { x: number; y: number } | undefined;
  techStack: { x: number; y: number } | undefined;
  contact: { x: number; y: number } | undefined;
}

export const NavBar: React.FC = () => {
  const [highlight, setHighlight] = useState<string | null>(null);
  const [sectionPositions, setSectionPositions] = useState<sectionPositions>({
    bio: undefined,
    projects: undefined,
    techStack: undefined,
    contact: undefined,
  });

  useEffect(() => {
    const pageTop = document.querySelector('body')?.getBoundingClientRect().y;
    const bioRect = document.querySelector(`#bio`)?.getBoundingClientRect();
    const projRect = document
      .querySelector(`#projects`)
      ?.getBoundingClientRect();
    const techStackRect = document
      .querySelector(`#tech-stack`)
      ?.getBoundingClientRect();
    const contactRect = document
      .querySelector(`.contact`)
      ?.getBoundingClientRect();

    // console.log(pageTop, bioRect, projRect, techStackRect, contactRect)

    if (
      (pageTop === 0 || pageTop) &&
      bioRect &&
      projRect &&
      techStackRect &&
      contactRect
    ) {
      const bio = {
        x: bioRect.x,
        y: bioRect.y - pageTop,
      };

      const projects = {
        x: projRect.x,
        y: projRect.y - pageTop,
      };

      const techStack = {
        x: techStackRect.x,
        y: techStackRect.y - pageTop,
      };

      const contact = {
        x: contactRect.x,
        y: contactRect.y - pageTop,
      };

      setSectionPositions({
        bio,
        projects,
        techStack,
        contact,
      });
    }
  }, []);

  const chooseHighlightItem = (currPos: number) => {
    const { bio, projects, techStack, contact } = sectionPositions;

    if (bio && projects && techStack && contact) {
      const landingDiff = Math.abs(currPos);
      const bioDiff = Math.abs(bio.y ? bio.y + currPos : 0);
      const projDiff = Math.abs(projects.y ? projects.y + currPos : 0);
      const techDiff = Math.abs(techStack.y ? techStack.y + currPos : 0);
      const contactDiff = Math.abs(contact.y ? contact.y + currPos : 0);

      const min = Math.min(
        landingDiff,
        bioDiff,
        projDiff,
        techDiff,
        contactDiff
      );

      return bioDiff === min
        ? 'bio'
        : projDiff === min
        ? 'projects'
        : techDiff === min
        ? 'tech'
        : contactDiff === min
        ? 'contact'
        : '';
    }
    return '';
  };

  useScrollPosition(({ currPos }) => {
    const item = chooseHighlightItem(currPos.y);
    setHighlight(item);
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
