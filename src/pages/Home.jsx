import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import services from "../data/services";
import { CloudIcon, CpuChipIcon, ShieldCheckIcon } from "../components/icons";

import vercelLogo from "../assets/logos/vercel.png";
import stripeLogo from "../assets/logos/stripe.png";
import notionLogo from "../assets/logos/notion.png";
import linearLogo from "../assets/logos/linear.png";
import slackLogo from "../assets/logos/slack.png";

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

      {/* HERO */}
      <motion.section
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <TypeAnimation
          sequence={[
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

      {/* CORE SERVICES */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="text-center mb-12"
          role="region"
          aria-labelledby="core-services-title"
        >
          <h2
            id="core-services-title"
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Core Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We specialize in scalable cloud infrastructure, advanced AI
            solutions and enterprise-grade security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[CloudIcon, CpuChipIcon, ShieldCheckIcon].map((Icon, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-colors text-center"
            >
              <Icon className="h-10 w-10 text-brand mb-4 mx-auto" />
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

      <motion.section
        className="bg-gray-50 dark:bg-gray-900 py-20 px-6 mt-16 border-t dark:border-gray-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by leading companies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            NovaTech powers infrastructure and innovation for teams around the
            world.
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-xl px-6 py-10 dark:bg-gray-700/60 dark:border dark:border-gray-600 transition-colors duration-300">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            {[vercelLogo, stripeLogo, notionLogo, linearLogo, slackLogo].map(
              (logo, index) => (
                <div
                  key={index}
                  className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-300"
                >
                  <img
                    src={logo}
                    alt="Client logo"
                    className="w-[120px] h-[40px] object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-white dark:bg-gray-900 py-24 px-6 mt-16 border-t dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to transform your digital infrastructure?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Contact us today and discover how NovaTech can elevate your business
            with secure, scalable and intelligent solutions.
          </p>
          <a href="/contact" className="btn">
            Get in touch
          </a>
        </div>
      </motion.section>
    </>
  );
}
