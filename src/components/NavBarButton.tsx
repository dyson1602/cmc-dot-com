import '../styles/nav-bar-button.css';

interface NavBarButtonProps {
  dest: string;
  title: string;
  highlight: boolean;
}

export const NavBarButton: React.FC<NavBarButtonProps> = ({
  dest,
  title,
  highlight,
}) => {
  const clickAction = (dest: string) => {
    const target = document.querySelector(dest);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={highlight ? 'nav-bar-button highlight' : 'nav-bar-button'}
      onClick={() => clickAction(dest)}
    >
      {title}
    </div>
  );
};
