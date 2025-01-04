import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function TechShowcase() {
  return (
    <>
      <Helmet>
        <title>Live Tech – NovaTech Solutions</title>
        <meta name="description" content="Experience live demos of our technology: AI, security and infrastructure in action." />
      </Helmet>

      <motion.section
        className="min-h-[50vh] flex flex-col justify-center items-center text-center px-6 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Technology in Action
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
          Explore live visualizations of our AI, security and cloud monitoring in real time.
        </p>
      </motion.section>
    </>
  );
}
