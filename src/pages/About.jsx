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

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              whileHover={{ y: -4 }}
            >
              <h3 className="text-xl font-semibold text-brand mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
