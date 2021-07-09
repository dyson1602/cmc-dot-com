import '../styles/scroll-to-top-button.css'

export const ScrollToTopButton: React.FC = () => {
  const landing = document.querySelector('#landing');

  return (
    <button className="scroll-to-top"
      onClick={() => landing && landing.scrollIntoView({ behavior: 'smooth' })}
    >
      Return to Top
    </button>
  );
};
