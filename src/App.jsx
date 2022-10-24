import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Content from "./component/Content";
import Hero from "./component/Hero";
import Nav from "./component/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./component/Footer";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 transition-all duration-300  overflow-x-hidden">
      <Nav />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
