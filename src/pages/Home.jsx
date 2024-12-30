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
        className="space-y-4 min-h-[80vh] flex flex-col justify-center px-6 pt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <TypeAnimation
          sequence={["NovaTech Home", 1500, "Cloud.", 1500, "AI.", 1500, "Cybersecurity.", 1500]}
          wrapper="h1"
          speed={50}
          className="text-3xl font-bold text-brand"
          repeat={Infinity}
        />

        <p className="text-gray-600 dark:text-gray-400">
          Welcome to our platform!
        </p>

        <nav className="flex gap-4">
          <Link to="/about" className="text-sm text-blue-500 underline">
            About
          </Link>
          <Link to="/contact" className="text-sm text-blue-500 underline">
            Contact
          </Link>
        </nav>

        <a href="#services" className="btn mt-6">Explore our services</a>
      </motion.section>
    </>
  );
}
