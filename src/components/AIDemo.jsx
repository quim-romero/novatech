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
    </div>
  );
}
