import NavigationBar from "./components/navigation/NavigationBar";
import About from "./components/About";
import SkillsGroup from "./(skills)/SkillsGroup";
import ProjectsGroup from "./projects/components/ProjectsGroup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Squares from "./components/react-bits/Squares";

export default function Home() {
  return (
    <main className="bg-transparent">
      {/* <NavigationBar /> */}
      {/* <Squares
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#222831"
        hoverFillColor="#222"
      /> */}
      <About />
      {/* <SkillsGroup /> */}
      <ProjectsGroup /> 
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
