import { useState } from "react";

const positiveWords = ["happy", "joyful", "love", "excited", "amazing", "great", "fantastic", "glad", "hopeful"];
const negativeWords = ["sad", "angry", "terrible", "hate", "bad", "awful", "frustrated", "upset", "depressed"];
const neutralWords = ["ok", "fine", "average", "normal", "meh", "so-so"];

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

import { TypeAnimation } from "react-type-animation";

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

  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: emotionCounts
          ? [emotionCounts.positive, emotionCounts.negative, emotionCounts.neutral]
          : [0, 0, 0],
        backgroundColor: ["#34d399", "#f87171", "#d1d5db"],
        borderWidth: 1,
      },
    ],
  };

  const responseMap = {
    positive: "Glad you're feeling great! Keep it up!",
    negative: "Sorry you're feeling that way. We're here for you.",
    neutral: "Thanks for checking in. Wishing you a steady day.",
  };

  return (
    <div className="max-w-xl mx-auto text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border dark:border-gray-700">
      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        How are you feeling today?
      </h3>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. I feel excited and happy"
        className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      />

      {!showResult ? (
        <button
          onClick={analyzeSentiment}
          className="btn bg-brand text-white hover:bg-brand-dark"
        >
          Analyze
        </button>
      ) : (
        <button
          onClick={() => {
            setShowResult(false);
            setInput("");
            setEmotionCounts(null);
            setDominantEmotion(null);
          }}
          className="btn bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          Try Again
        </button>
      )}

      {showResult && (
        <div className="mt-8">
          <div className="w-64 mx-auto">
            <Pie data={data} />
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">Analyzing input...</p>
            <TypeAnimation
              sequence={[responseMap[dominantEmotion] || "Thanks for your input."]}
              speed={50}
              wrapper="p"
              className="text-lg font-medium mt-2 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
