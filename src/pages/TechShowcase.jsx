import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import InfraMonitor from "../components/InfraMonitor";
import AIDemo from "../components/AIDemo";
import SecurityAlerts from "../components/SecurityAlerts";

export default function TechShowcase() {
  return (
    <>
      <Helmet>
        <title>Live Tech – NovaTech Solutions</title>
        <meta
          name="description"
          content="Experience live demos of our technology: AI, security and infrastructure in action."
        />
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

      <motion.section
        className="max-w-6xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Infrastructure Monitoring
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A live animated chart showing simulated performance metrics.
          </p>
        </div>
        <InfraMonitor />
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            AI Sentiment Analysis
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Test our sentiment engine with live text input.
          </p>
        </div>
        <AIDemo />
      </motion.section>

      <motion.section
        className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Simulated Security Feed
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-time event stream of system security logs.
          </p>
        </div>
        <SecurityAlerts />
      </motion.section>
    </>
  );
}
