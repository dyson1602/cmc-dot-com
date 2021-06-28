import './styles/App.css';
import {
  BioContainer,
  ContactContainer,
  Footer,
  LandingContainer,
  NavBar,
  ProjectsContainer,
  TechStackContainer,
} from './components';

const App = () => {
  return (
    <div className="main-container">
      <LandingContainer />
      <NavBar />
      <BioContainer />
      <ProjectsContainer />
      <TechStackContainer />
      <ContactContainer />
      <Footer />
    </div>
  );
};

export default App;
