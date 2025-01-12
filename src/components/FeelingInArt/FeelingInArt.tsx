import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function FeelingInArt() {
  const artForms = [
    {
      title: "🎨 Feeling Through Visual Art",
      description:
        'Think colors can’t talk? Van Gogh begs to differ. His "Starry Night" isn’t just a painting—it’s a mood. Those swirly skies and bold blues are like emotions dancing on canvas.',
    },
    {
      title: "🎵 The Power of Music",
      description:
        'From Beethoven’s moody "Moonlight Sonata" to Pharrell’s infectious "Happy," music has a way of giving your heart a megaphone. It’s like a time machine for your feelings—joy, nostalgia, or even that ugly-cry moment.',
    },
    {
      title: "💃 Dance and Movement",
      description:
        'Martha Graham didn’t just dance; she *felt* with every move. Her work "Lamentation" wraps grief into motion, proving that sometimes words just don’t cut it, but a good pirouette might.',
    },
    {
      title: "🎥 Film and Emotion",
      description:
        'Movies like "Inside Out" turn emotions into literal characters. Joy, Sadness, and Anger aren’t just feelings—they’re the stars of the show, showing us what it means to grow and feel deeply.',
    },
  ];

  return (
    <Container id="feeling-in-art">
      <ScrollAnimation animateIn="flipInX" duration={1.2}>
        <h2> Feeling in Art </h2>
      </ScrollAnimation>
      <div className="cards">
        {artForms.map((art, index) => (
          <ScrollAnimation
            animateIn="flipInX"
            key={index}
            delay={index * 200}
            duration={1}
          >
            <div className="card">
              <h3>{art.title}</h3>
              <p>{art.description}</p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
