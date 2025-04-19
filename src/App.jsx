import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Name } from './components/Name/Name';
import { About } from './components/About/About';
import { WorkEx } from './components/WorkEx/WorkEx';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';



function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Name />
      <About />
      <WorkEx />
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
};

export default App;
