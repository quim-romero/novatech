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

const team = [
  { name: "Sophie Allen", role: "CEO", photo: "/assets/team/sophie.png" },
  { name: "Daniel Kim", role: "CTO", photo: "/assets/team/daniel.png" },
  { name: "Lea Tran", role: "Lead Designer", photo: "/assets/team/lea.png" },
  { name: "Marco Ruiz", role: "AI Architect", photo: "/assets/team/marco.png" },
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

        <motion.section
          className="bg-gray-50 dark:bg-gray-900 py-20 px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A diverse team of strategists, engineers and creatives powering
              NovaTech forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full rounded-lg shadow-md object-cover aspect-[4/5]"
                />
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
