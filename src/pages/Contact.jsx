import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message should be at least 10 characters")
    .required("Please write a message"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact – NovaTech Solutions</title>
        <meta
          name="description"
          content="Get in touch with NovaTech for your digital transformation."
        />
      </Helmet>

      <motion.section
        className="max-w-5xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Let’s Work Together
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Whether you’re looking to innovate, scale or secure — we’re here to
          help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Our Office
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                1234 Innovation Drive
                <br />
                Addison, TX 75001
                <br />
                United States
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Email
              </h2>
              <a
                href="mailto:contact@novatech.com"
                className="text-gray-600 dark:text-gray-400 hover:underline"
              >
                contact@novatech.com
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Phone
              </h2>
              <a
                href="tel:+15551234567"
                className="text-gray-600 dark:text-gray-400 hover:underline"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            <div>
              <label className="block mb-1 font-medium text-sm dark:text-gray-300">
                Name
              </label>
              <input
                {...register("name")}
                placeholder="Your full name"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm dark:text-gray-300">
                Email
              </label>
              <input
                {...register("email")}
                placeholder="you@example.com"
                type="email"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium text-sm dark:text-gray-300">
                Message
              </label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-brand text-white py-3 px-6 rounded-md font-medium hover:bg-brand-dark transition"
            >
              Send Message
            </button>

            {isSubmitSuccessful && (
              <motion.p
                className="text-green-600 text-sm font-medium mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Message sent successfully!
              </motion.p>
            )}
          </form>
        </div>
      </motion.section>

      <motion.div
        className="mt-16 mb-20 max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Our Location
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xl mx-auto">
            NovaTech Solutions is headquartered in San Francisco, serving
            clients worldwide.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <iframe
            title="NovaTech HQ"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=1234%20Innovation%20Drive%20Tech%20City,%20TX%2075001%20United%20States+(Your%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            height="380"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </motion.div>
    </>
  );
}
