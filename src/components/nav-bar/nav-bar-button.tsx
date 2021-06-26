interface NavBarButtonProps {
  clickAction(dest: string): void;
  dest: string;
  title: string;
}

export const NavBarButton: React.FC<NavBarButtonProps> = ({
  dest,
  title,
  clickAction,
}) => {
  return <button onClick={() => clickAction(dest)}>{title}</button>;
};
