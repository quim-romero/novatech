import { useState } from "react";

const positiveWords = ["happy", "joyful", "love", "excited"];
const negativeWords = ["sad", "angry", "terrible", "hate"];
const neutralWords = ["ok", "fine", "average", "meh"];

export default function AIDemo() {
  const [input, setInput] = useState("");
  const [emotionCounts, setEmotionCounts] = useState(null);
  const [dominantEmotion, setDominantEmotion] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const analyzeSentiment = () => {
    const words = input.toLowerCase().split(/\s+/);
    let counts = { positive: 0, negative: 0, neutral: 0 };
    words.forEach((word) => {
      if (positiveWords.includes(word)) counts.positive++;
      else if (negativeWords.includes(word)) counts.negative++;
      else if (neutralWords.includes(word)) counts.neutral++;
    });
    const dominant = Object.entries(counts).reduce(
      (a, b) => (b[1] > a[1] ? b : a)
    )[0];
    setEmotionCounts(counts);
    setDominantEmotion(dominant);
    setShowResult(true);
  };

}
