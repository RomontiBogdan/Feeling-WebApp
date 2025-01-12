import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

type MoodCategory = "Energized" | "Neutral" | "Anxious" | "Tired" | "Lonely" | "Stressed" | "Overwhelmed";

const questions = [
  {
    question: "How hard was it to get out of bed today?",
    options: [
      "Not hard at all",
      "Only as hard as it usually is",
      "A bit of an effort",
      "I'm doing this quiz from my bed",
    ],
    weights: [1, 2, 3, 4],
  },
  {
    question: "How does being on your phone make you feel?",
    options: [
      "Fine, it's a great way to stay connected",
      "Fine, but I'm probably on it too much",
      "It should make me feel connected, but I get a bit stressed",
      "I get anxious looking at my phone but I can't look away",
    ],
    weights: [1, 2, 3, 4],
  },
  {
    question: "Have you been outside today?",
    options: [
      "Yes, I try and go outside for a bit every day",
      "Yes, but only to go to school",
      "No",
      "No, and I didn't go out yesterday either",
    ],
    weights: [1, 2, 3, 4],
  },
  {
    question: "How do you feel about watching the news?",
    options: [
      "Good - I like to keep up to date and know what's happening in the world",
      "Fine, it's just something else to watch",
      "I don't really watch it because it can be a bit depressing",
      "The news makes me feel really anxious and I get nervous when it comes on",
    ],
    weights: [1, 2, 3, 4],
  },
  {
    question: "How do you feel about your friends today?",
    options: [
      "Great, I feel like I can talk to them about anything",
      "Good, we always have fun",
      "Ok, it's nice to hang out with people but we don't tell each other everything",
      "Sometimes I feel a bit lonely",
    ],
    weights: [1, 2, 3, 4],
  },
  {
    question: "Have you got any homework?",
    options: [
      "Nope, already finished it!",
      "Yes, but not too much",
      "Yes, and I'm not sure where to start",
      "Yes, and it feels a bit overwhelming",
    ],
    weights: [1, 2, 3, 4],
  },
];

const results = [
  { result: "You're feeling Energized and Ready!", emoji: "💪" },
  { result: "You're feeling Relaxed and Chill!", emoji: "😎" },
  { result: "You're feeling Anxious but Hopeful!", emoji: "🌱" },
  { result: "You're feeling Tired but Determined!", emoji: "😴" },
  { result: "You're feeling Confused and Overwhelmed!", emoji: "😕" },
];

export function WhatFeelingAreYouToday() {
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(""));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [finalResult, setFinalResult] = useState<{ result: string; emoji: string } | null>(null);
  const [moodScores, setMoodScores] = useState<Record<MoodCategory, number>>({
    Energized: 0,
    Neutral: 0,
    Anxious: 0,
    Tired: 0,
    Lonely: 0,
    Stressed: 0,
    Overwhelmed: 0,
  });

  const [progress, setProgress] = useState<number>(0); // Track progress for the progress bar

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      calculateResult(answers);
    }
  }, [currentQuestionIndex]);

  const handleAnswer = (answer: string, answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // Update mood scores based on the selected answer
    const selectedWeight = questions[currentQuestionIndex].weights[answerIndex];
    updateMoodScores(selectedWeight);

    console.log(`Answered question ${currentQuestionIndex + 1} of ${questions.length}`);
    console.log(`Answer: ${answer}`);
    console.log(`Mood scores: ${JSON.stringify(moodScores)}`);

    const nextQuestionIndex = currentQuestionIndex + 1;
    const totalQuestions = questions.length;

    // Update the progress bar at each step
    setProgress(((nextQuestionIndex) / totalQuestions) * 100); // Update progress based on the current question

    if (nextQuestionIndex === totalQuestions) {
      // Set a delay for the final progress bar update and result transition
      setTimeout(() => {
        setProgress(100); // Set progress to 100%
        calculateResult(newAnswers);
      }, 500); // Delay the progress update and result transition
    } else {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  const updateMoodScores = (selectedWeight: number) => {
    const newMoodScores = { ...moodScores };
    switch (selectedWeight) {
      case 1:
        newMoodScores.Energized += 1;
        break;
      case 2:
        newMoodScores.Neutral += 1;
        break;
      case 3:
        newMoodScores.Anxious += 1;
        break;
      case 4:
        newMoodScores.Overwhelmed += 1;
        break;
      default:
        break;
    }
    setMoodScores(newMoodScores);
  };

  const calculateResult = (answers: string[]) => {
    const maxScore = Math.max(...Object.values(moodScores));
    const resultCategory = (Object.keys(moodScores) as MoodCategory[]).find(
      (key) => moodScores[key] === maxScore
    );

    if (resultCategory) {
      const feeling = results.find((result) =>
        result.result.includes(resultCategory)
      ) || results[0];
      console.log(`Feeling: ${feeling.result}`);
      console.log(`Emoji: ${feeling.emoji}`);
      setFinalResult(feeling);
    }
  };

  return (
    <Container id="feeling-quiz">
      <div className="quiz-container">
        <h2>Find Out How You're Feeling Today!</h2> {/* Title added here */}
        
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${progress}%`,
              transition: "width 0.5s ease",
            }}
          ></div>
        </div>

        {finalResult ? (
          <div className="result fade-in">
            <ScrollAnimation animateIn="fadeIn" duration={1}>
              <h3>{finalResult.result}</h3>
              <p>{finalResult.emoji}</p>
            </ScrollAnimation>
          </div>
        ) : (
          <div className="question">
            <h3>{questions[currentQuestionIndex].question}</h3>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option, index)}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
