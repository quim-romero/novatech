import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const values = [
  {
    title: "Mission",
    text: "Deliver innovative technology solutions that drive long-term growth and transformation.",
  },
  {
    title: "Vision",
    text: "Become a global partner of choice in AI, cloud infrastructure and cybersecurity.",
  },
  {
    title: "Culture",
    text: "We value curiosity, clarity, technical excellence and meaningful impact over everything.",
  },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us – NovaTech Solutions</title>
        <meta
          name="description"
          content="Learn more about NovaTech's mission, vision and expert team behind our solutions."
        />
      </Helmet>

      <motion.div
        className="space-y-4 max-w-5xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-brand dark:text-white text-center mb-6">
          About Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
          Learn more about NovaTech Solutions.
        </p>
      </motion.div>
    </>
  );
}
