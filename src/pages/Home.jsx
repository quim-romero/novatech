import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import services from "../data/services";
import { CloudIcon, CpuChipIcon, ShieldCheckIcon } from "../components/icons";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>NovaTech Solutions – Cloud, AI & Security Services</title>
        <meta
          name="description"
          content="Empowering your business through cloud, AI and cybersecurity solutions."
        />
      </Helmet>

      <motion.section
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <TypeAnimation
          sequence={[
            "NovaTech Home",
            1500,
            "Cloud.",
            1500,
            "AI.",
            1500,
            "Cybersecurity.",
            1500,
          ]}
          wrapper="h1"
          speed={50}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          repeat={Infinity}
        />

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-6">
          NovaTech empowers businesses with cloud infrastructure, artificial
          intelligence, and cybersecurity services.
        </p>

        <a href="#services" className="btn mt-6">
          Explore our services
        </a>
      </motion.section>

      <motion.section
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12" role="region" aria-labelledby="core-services-title">
          <h2 id="core-services-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We specialize in scalable cloud infrastructure, advanced AI
            solutions and enterprise-grade security.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[CloudIcon, CpuChipIcon, ShieldCheckIcon].map((Icon, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
            >
              <Icon className="h-10 w-10 text-brand mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {services[idx].category}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {services[idx].description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
