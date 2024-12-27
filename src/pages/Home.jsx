import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-brand">NovaTech Home</h1>
      <p className="text-gray-600">Welcome to our platform!</p>
      <nav className="flex gap-4">
        <Link to="/about" className="text-sm text-blue-500 underline">About</Link>
        <Link to="/contact" className="text-sm text-blue-500 underline">Contact</Link>
      </nav>
    </div>
  );
}
