import Featured from './Components/Featured';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar'
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Featured />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
