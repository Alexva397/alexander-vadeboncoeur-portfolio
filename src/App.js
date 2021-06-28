import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import TechContainer from "./components/TechContainer";
import ProjectContainer from "./components/ProjectContainer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner /> 
        <TechContainer />
        <ProjectContainer />
      </main>
    </>
  );
}

export default App;
