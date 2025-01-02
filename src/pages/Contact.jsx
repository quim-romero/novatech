import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  message: yup.string().min(10, "Message should be at least 10 characters").required("Please write a message"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
          Whether you’re looking to innovate, scale or secure — we’re here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Office</h2>
              <p className="text-gray-600 dark:text-gray-400">
                1234 Innovation Drive<br />
                Tech City, TX 75001<br />
                United States
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h2>
              <p className="text-gray-600 dark:text-gray-400">contact@novatech.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h2>
              <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="border border-dashed border-gray-300 dark:border-gray-700 p-6 rounded-lg text-center text-gray-500 dark:text-gray-400">
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </>
  );
}
