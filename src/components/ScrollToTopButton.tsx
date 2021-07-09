export const ScrollToTopButton: React.FC = () => {
  const landing = document.querySelector('#landing');

  return (
    <button
      onClick={() => landing && landing.scrollIntoView({ behavior: 'smooth' })}
    >
      Return to Top
    </button>
  );
};
