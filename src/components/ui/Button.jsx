export default function Button({ children, variant = "default", ...props }) {
  const base = "px-4 py-2 rounded-md text-sm font-medium transition";
  const variants = {
    default: "bg-brand text-white hover:bg-brand-dark",
    outline: "border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    ghost: "text-brand hover:underline",
  };
  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
