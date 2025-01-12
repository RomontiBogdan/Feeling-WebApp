import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import IllustrationImage from "../../assets/illustration.png";
import { NavHashLink } from "react-router-hash-link";
import HelloGif from "../../assets/Hello.gif";

export function Home() {
  return (
    <Container id="home-feeling">
      <div className="feeling-text">
        <ScrollAnimation animateIn="fadeInUp">
          <h1>
            Welcome to the World of Feeling <img src={HelloGif} alt="Hello" width="50px" />
          </h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>"Feeling" is everywhere! It’s that squishy, warm, fuzzy thing you get in your heart when you pet a puppy. It’s the weird tingly sensation when you hear your favorite song on the radio.</h3>
        </ScrollAnimation>
      </div>

      <div className="feeling-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 100}>
          <img src={IllustrationImage} alt="Feeling Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
