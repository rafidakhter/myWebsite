import "./App.css";

import Header from "./components/Header/header";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import PrsonalProjects from "./components/Personal Projects/PersonalProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <WorkExperience />
      <PrsonalProjects />
    </div>
  );
}

export default App;
