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
      <section>
        <LandingContainer />
      </section>
      <section style={{display: "block"}}>
        <NavBar />
      </section>
      <BioContainer />
      <ProjectsContainer />
      <TechStackContainer />
      <ContactContainer />
    </div>
  );
};

export default App;
