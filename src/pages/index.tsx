import Projects from "@/components/Projects";
import About from "@/components/About";
import Rootlayout from "@/components/Rootlayout";

export default function Home() {
  return (
    <Rootlayout>
      <Projects />
      <About />
    </Rootlayout>
  );
}
