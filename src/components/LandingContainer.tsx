import '../styles/landing-container.css';
import LandingAnimation from './LandingAnimation';

export const LandingContainer: React.FC = () => {
  return (
    <section id="landing" className="full-height">
      <LandingAnimation />
    </section>
  );
};
