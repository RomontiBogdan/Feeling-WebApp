import { Container } from "./styles";
import Illustration from "../../assets/cultures.png";
import Portugal from "../../assets/portugal.png";
import Denmark from "../../assets/denmark.png";
import Japan from "../../assets/japan.png";
import Mexico from "../../assets/mexico.png";
import India from "../../assets/india.png";
import ScrollAnimation from "react-animate-on-scroll";

export function FeelingsAroundTheWorld() {
  const playPronunciation = (text: string, lang: string): void => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang; // Language code, e.g., "pt-PT" for Portuguese
    speechSynthesis.speak(utterance);
  };

  return (
    <Container id="feelings">
      <div className="feelings-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>Feelings Around the World</h2>
        </ScrollAnimation>

        {/* Section 1: Words for Emotions */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <h4>Feelings are the same everywhere, but every culture has its own special way of talking about them.</h4>
          <h3>Unique Words for Feelings</h3>
          <div className="feelings-grid">
            <div className="feeling">
              <h4>
                <img src={Portugal} alt="Portugal Flag" />
                Saudade
                <button onClick={() => playPronunciation("Saudade", "pt-PT")}>
                  🔊
                </button>
              </h4>
              <p>
                A word for missing someone or something you love and wish you could have again.
              </p>
            </div>
            <div className="feeling">
              <h4>
                <img src={Denmark} alt="Denmark Flag" />
                Hygge
                <button onClick={() => playPronunciation("Hygge", "da-DK")}>
                  🔊
                </button>
              </h4>
              <p>
                The cozy feeling of being comfy and happy, often with friends or family.
              </p>
            </div>
            <div className="feeling">
              <h4>
                <img src={Japan} alt="Japan Flag" />
                Mono no Aware
                <button onClick={() => playPronunciation("Mono no Aware", "ja-JP")}>
                  🔊
                </button>
              </h4>
              <p>
                A feeling of sadness and beauty when you think about how things don’t last forever.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        {/* Section 2: Celebrations of Emotions */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <h3>How People Celebrate Feelings</h3>
          <div className="celebrations-grid">
            <div className="celebration">
              <h4>
                <img src={Mexico} alt="Mexico Flag" />
                Day of the Dead
              </h4>
              <p>
                A colorful celebration to remember and honor loved ones who have passed away.
              </p>
            </div>
            <div className="celebration">
              <h4>
                <img src={India} alt="India Flag" />
                Holi
              </h4>
              <p>
                A joyful festival where people throw colors, dance, and celebrate happiness together.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Illustration */}
      <div className="feelings-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={Illustration} alt="Feelings Around the World" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
