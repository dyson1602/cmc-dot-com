import './App.css';
import {
  BioContainer,
  ContactContainer,
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
    </div>
  );
};

export default App;
