import { useEffect, useState } from 'react';

interface sectionPositions {
  bio: { x: number; y: number } | undefined;
  projects: { x: number; y: number } | undefined;
  techStack: { x: number; y: number } | undefined;
  contact: { x: number; y: number } | undefined;
}

export const useElementStartPosition = () => {
  const [sectionPositions, setSectionPositions] = useState<sectionPositions>({
    bio: undefined,
    projects: undefined,
    techStack: undefined,
    contact: undefined,
  });

  useEffect(() => {
    const pageTop = document.querySelector('body')?.getBoundingClientRect().y;
    const bioRect = document.querySelector(`#bio`)?.getBoundingClientRect();

    const projectsRect = document
      .querySelector(`#projects`)
      ?.getBoundingClientRect();
    const techStackRect = document
      .querySelector(`#tech-stack`)
      ?.getBoundingClientRect();
    const contactRect = document
      .querySelector(`.contact`)
      ?.getBoundingClientRect();

    if (
      (pageTop === 0 || pageTop) &&
      bioRect &&
      projectsRect &&
      techStackRect &&
      contactRect
    ) {
      const bio = { x: bioRect.x, y: bioRect.y - pageTop };
      const projects = { x: projectsRect.x, y: projectsRect.y - pageTop };
      const techStack = { x: techStackRect.x, y: techStackRect.y - pageTop };
      const contact = { x: contactRect.x, y: contactRect.y - pageTop };

      setSectionPositions({ bio, projects, techStack, contact });
    }
  }, []);
  return sectionPositions;
};
