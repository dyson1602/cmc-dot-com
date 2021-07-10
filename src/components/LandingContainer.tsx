import '../styles/landing-container.css';
import ANewProductionAnimation from '../animations/ANewProduction';
import ScrollToProfileButton from './ScollToProfileButton';
import ThursdayAnimation from '../animations/Thursday';

export const LandingContainer: React.FC = () => {
  return (
    <section id="landing">
      <ANewProductionAnimation />
      {/* <ThursdayAnimation /> */}
      <br />
      <br />
      <ScrollToProfileButton />
      <div className="landing-border tl" />
      <div className="landing-border tr" />
      <div className="landing-border bl" />
      <div className="landing-border br" />
    </section>
  );
};
