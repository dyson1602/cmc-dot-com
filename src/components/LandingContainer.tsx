import '../styles/landing-container.css';
import ANewProductionAnimation from '../animations/ANewProduction';
import ScrollToProfileButton from './ScollToProfileButton';

export const LandingContainer: React.FC = () => {
  return (
    <section id="landing">
      <ANewProductionAnimation />
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
