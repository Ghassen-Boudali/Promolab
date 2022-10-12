import { useRef } from "react";
import "./css/App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const partners = useRef(null);
  const services = useRef(null);
  const team = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
      <div className="hero">
        <ul>
        <li onClick={() => scrollToSection(partners)} className="link">
            Partners
          </li>
          <li onClick={() => scrollToSection(services)} className="link">
            Services
          </li>
          <li onClick={() => scrollToSection(team)} className="link">
            Team
          </li>
          <li onClick={() => scrollToSection(contact)} className="link">
            Contact
          </li>
        </ul>
      </div>
      <div ref={partners} className="partners">
        <h3>Partners</h3>
      </div>
      <div ref={services} className="services">
        <h3>Services</h3>
      </div>
      <div ref={team} className="team">
        <h3>Team</h3>
      </div>
      <div ref={contact} className="contact">
        <h3>Contact</h3>
      </div>
    </div>
  );
}

export default App;