import './App.css';

//components
// import Main from './components/Main';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact'
import Landing from './components/Landing';


function App() {
  return (
    <div>
      <Landing />
      {/* <Main /> */}
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;