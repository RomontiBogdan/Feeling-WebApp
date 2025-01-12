import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Home } from "../Home/Home";
import { FeelingsAroundTheWorld } from "../FeelingsAroundTheWorld/FeelingsAroundTheWorld";
import { AboutFeeling } from "../AboutFeeling/AboutFeeling";
import { FeelingInArt } from "../FeelingInArt/FeelingInArt";
import { FamousQuotes } from "../FamousQuotes/FamousQuotes";
import { FeelingsInDecisions } from "../FeelingsInDecisions/FeelingsInDecisions";
import { WhatFeelingAreYouToday } from "../WhatFeelingAreYouToday/WhatFeelingAreYouToday";

import nervousIcon from "../../assets/nervous-icon.svg";
import happyIcon from "../../assets/happy-icon.svg";
import peaceIcon from "../../assets/peace-icon.svg";
import upsetIcon from "../../assets/upset-icon.svg";
import smileIcon from "../../assets/smile-icon.svg";
import frownIcon from "../../assets/frown-icon.svg";
import scaredIcon from "../../assets/scared-icon.svg";
import loveIcon from "../../assets/love-icon.svg";
import sleepyIcon from "../../assets/sleepy-icon.svg";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse"
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5
                },
                radius: 60
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1
                }
              },
              push: {
                quantity: 2
              },
              remove: {
                quantity: 2
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200
                }
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              limit: 20,
              value: 15
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false
              },
              random: true,
              value: 1
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false
              },
              direction: "random",
              random: true,
              value: 0
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
              },
              image: [
                {
                  src: sleepyIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: happyIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: nervousIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: upsetIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: smileIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: frownIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: peaceIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: scaredIcon,
                  width: 20,
                  height: 20
                },
                {
                  src: loveIcon,
                  width: 20,
                  height: 20
                }
              ],
              polygon: {
                sides: 5
              },
              stroke: {
                color: "#000000",
                width: 0
              },
              type: "image"
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false
              },
              random: false,
              value: 16
            }
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5
            },
            move: {
              radius: 10
            },
            scale: 1,
            url: ""
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
      <Home></Home>
      <AboutFeeling></AboutFeeling>
      <FeelingsAroundTheWorld></FeelingsAroundTheWorld>
      <FeelingInArt></FeelingInArt>
      <FamousQuotes></FamousQuotes>
      <FeelingsInDecisions></FeelingsInDecisions>
      <WhatFeelingAreYouToday></WhatFeelingAreYouToday>
    </Container>
  );
}
