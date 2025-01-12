import { Container } from "./styles";
import ImageWhat from "../../assets/what.png";

import ScrollAnimation from "react-animate-on-scroll";

export function AboutFeeling() {
  return (
    <Container id="about-feeling">
      <div className="feeling-image">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <img src={ImageWhat} alt="What is Feeling?" />
        </ScrollAnimation>
      </div>
      <div className="feeling-text">
        <ScrollAnimation animateIn="fadeInRight">
          <h2>What Exactly is Feeling?</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.1 * 1000}>
          <p>
            "Feeling" is that excitement before a big adventure, or the warmth of a hug from a friend.
            Some say it's an emotion, others say it's a mood, and some even think it's just your body saying, “Hey, I need a snack!” 
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            Feelings are the glue between our mind, body, and the world. They show up in big moments, small joys, or even random daydreams.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.3 * 1000}>
          <p>
            At the end of the day, feelings are what make life interesting. They shape our choices, color our memories, and remind us that being human is pretty amazing.
          </p>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
