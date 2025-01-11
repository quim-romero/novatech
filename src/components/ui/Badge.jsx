export default function Badge({ children, color = "default" }) {
  const base = "inline-block text-xs font-medium px-2 py-1 rounded-full";
  const variants = {
    default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white",
    green: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200",
    red: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200",
    blue: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200",
  };
  return <span className={`${base} ${variants[color]}`}>{children}</span>;
}
