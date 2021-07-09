import '../styles/landing-container.css';
import ANewProductionAnimation from '../animations/ANewProduction';
import ThursdayAnimation from '../animations/Thursday';
import ScrollToProfileButton from './ScollToProfileButton';

export const LandingContainer: React.FC = () => {
  return (
    <section id="landing" className="full-height">
      <ANewProductionAnimation />
      <br />
      <ScrollToProfileButton />
      {/* <ThursdayAnimation /> */}
    </section>
  );
};
