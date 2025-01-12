import { Container } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Header() {
  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home-feeling" className="logo">
          <span> Feeling </span>
        </HashLink>
      </Router>
    </Container>
  );
}
