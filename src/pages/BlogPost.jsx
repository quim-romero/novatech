import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import blogPosts from "../data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <motion.section className="min-h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Article not found</h1>
          <p className="text-gray-600">We couldn't find the blog post you’re looking for.</p>
        </div>
      </motion.section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} – NovaTech Blog</title>
        <meta name="description" content={post.preview} />
      </Helmet>

      <motion.article
        className="max-w-3xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-sm text-gray-500 mb-4">
          {new Date(post.date).toLocaleDateString("en-US")}
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </motion.article>
    </>
  );
}
