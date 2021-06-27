interface NavBarButtonProps {
  dest: string;
  title: string;
}

export const NavBarButton: React.FC<NavBarButtonProps> = ({ dest, title }) => {
  
  const clickAction = (dest: string) => {
    const target = document.querySelector(dest);
    if (target) {
      target.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
  };

  return <button className="nav-bar-button" onClick={() => clickAction(dest)}>{title}</button>;
};
