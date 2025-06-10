import Header from './components/Header.tsx';
import Card from './components/Card.tsx';
import LanguageBox from './components/LanguageBox.tsx';
import ExperienceBox from './components/ExperienceBox.tsx';
import Project from './components/Project.tsx';
import { skills } from './skills.ts';
import { projects } from './projects.ts';

function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="lower-main-container">
        <Card />
        <div className="skills-all">
          <h2 className="work" id="skills">
            Skills
          </h2>
          <div className="skills-holder">
            {skills.map((item) => (
              <LanguageBox key={item.id} icon={item.pic} name={item.name} />
            ))}
          </div>
        </div>
        <div className="exp-all">
          <h2 className="work expM" id="exp">
            Experience
          </h2>
          <div className="exp-holder">
            <ExperienceBox />
          </div>
        </div>
        <div className="project-all">
          <h2 className="work" id="projects">
            Projects
          </h2>
          <div className="projects-container">
            {projects.map((item) => (
              <Project key={item.id} info={item} />
            ))}
          </div>
        </div>
        <footer>&copy; 2024 Piotr Głazowski</footer>
      </div>
    </div>
  );
}

export default App;
