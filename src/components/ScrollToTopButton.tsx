export const ScrollToTopButton: React.FC = () => {
  const landing = document.querySelector('#landing');

  const clickHandler = () => {
    if (landing) {
      landing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <button onClick={clickHandler}>Scroll To TOP</button>;
};
