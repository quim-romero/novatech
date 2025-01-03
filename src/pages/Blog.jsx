import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogPosts from "../data/blogPosts";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog – NovaTech Solutions</title>
        <meta name="description" content="Articles and insights from the NovaTech team." />
      </Helmet>

      <motion.section
        className="max-w-6xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Insights & Articles
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-xs text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString("en-US")}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {post.preview}
              </p>
              <Link to={`/blog/${post.slug}`} className="text-sm text-brand hover:underline font-medium">
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
