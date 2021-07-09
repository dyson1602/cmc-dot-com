import '../styles/scroll-button.css';

const ScrollToProfileButton: React.FC = () => {
  return (
    <div className="scroll-button">
      <span
       className=""
        onClick={() => {
          const topOfProfile = document.querySelector('#bio');
          topOfProfile && topOfProfile.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        View Profile
      </span>
    </div>
  );
};

export default ScrollToProfileButton;
