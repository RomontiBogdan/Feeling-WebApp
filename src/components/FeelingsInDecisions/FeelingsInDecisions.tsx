import React from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function FeelingsInDecisions() {
  const content = [
    {
      title: "Emotions Are Like Decision GPS",
      description:
        "Emotions are like your personal GPS for choices. Neuroscientist Antonio Damasio discovered that without emotions, even small decisions can feel impossible. Feelings guide us through life’s big and small moments.",
      icon: "🧭",
    },
    {
      title: "The Power of Gut Instincts",
      description:
        'Ever just "know" something is right? That’s emotional intuition. Malcolm Gladwell’s book "Blink" explains how we make snap decisions using gut feelings—a superpower powered by emotions.',
      icon: "✨",
    },
    {
      title: "Everyday Choices, Everyday Feelings",
      description:
        "From choosing your morning coffee to your next big move, feelings are always in play. We lean toward what feels good—be it comfort, confidence, or joy.",
      icon: "☕",
    },
    {
      title: "Big Life Moves",
      description:
        "Big choices like moving cities or saying ‘yes’ to a big opportunity mix logic with deep emotions like hope, love, or fear. It’s the heart and mind working together.",
      icon: "🌍",
    },
  ];

  return (
    <Container id="feelings-in-decisions">
      <ScrollAnimation animateIn="fadeInDown" duration={1}>
        <h2>Feelings Effect on Our Life</h2>
      </ScrollAnimation>
      <div className="zigzag">
        {content.map((item, index) => (
          <ScrollAnimation
            animateIn={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
            delay={index * 300}
            duration={1}
            key={index}
          >
            <div className={`zigzag-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="icon">{item.icon}</div>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
