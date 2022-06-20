import About from "./components/About/About";
import FirstDiv from "./components/FirstDiv/FirstDiv";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import Skills2 from "./components/Skills2/Skills2";
import Work from "./components/Work/Work";
import "./App.css"

function App() {
  return (
    <div>
      <FirstDiv/>
      <About/>
      <Skills />
      <Skills2 />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
