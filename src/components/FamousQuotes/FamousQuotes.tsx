import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

import BlaisePascalImage from "../../assets/blaise-pascal.png";
import EmersonImage from "../../assets/ralph-waldo-emerson.png";
import OrsonWellesImage from "../../assets/orson-welles.png";

export function FamousQuotes() {
  const quotes = [
    {
      quote:
        '"The heart has its reasons which reason knows not." – Blaise Pascal (philosopher and mathematician)',
      description:
        "Feelings can be surprising, like when your heart knows something your mind doesn’t. It’s that unexplainable pull to follow your instincts, even when it doesn't make sense.",
      image: BlaisePascalImage,
    },
    {
      quote:
        '"It is not length of life, but depth of life." – Ralph Waldo Emerson (philosopher)',
      description:
        "A life filled with meaningful experiences matters more than how long it lasts. It’s about enjoying each moment fully, like taking your time with your favorite treat.",
      image: EmersonImage,
    },
    {
      quote:
        '"I’m not afraid of dying. I’m afraid I haven’t lived." – Orson Welles (filmmaker and actor)',
      description:
        "Living with passion and embracing every emotion is what makes life worth it. Avoiding feelings means missing out on the magic of truly being alive.",
      image: OrsonWellesImage,
    },
  ];

  return (
    <Container id="famous-quotes">
      <ScrollAnimation animateIn="fadeInDown" duration={1}>
        <h2>Quotes That Tickle Your Feelings</h2>
      </ScrollAnimation>
      <div className="quote-cards">
        {quotes.map((quote, index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            duration={1}
            delay={index * 300} 
            key={index}
          >
            <div className="quote-card">
              <div className="image-container">
                <img src={quote.image} alt={quote.quote} />
              </div>
              <p className="quote">{quote.quote}</p>
              <p className="description">{quote.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
