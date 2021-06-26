interface NavBarButtonProps {
  dest: string;
  title: string;
}

export const NavBarButton: React.FC<NavBarButtonProps> = ({
  dest,
  title,
}) => {

  const clickAction = (dest: string) => {
    const target = document.querySelector(dest)
    console.log(target)
  }

  return <button onClick={() => clickAction(dest)}>{title}</button>;
};
