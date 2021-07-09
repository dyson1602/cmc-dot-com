import '../styles/scroll-to-top-button.css';

export const ScrollToTopButton: React.FC = () => {
  return (
    <button
      className="scroll-to-top"
      onClick={() => {
        const landing = document.querySelector('#landing');
        landing && landing.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Return to Top
    </button>
  );
};
