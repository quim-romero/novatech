import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-brand">About Us</h1>
      <p className="text-gray-600">Learn more about NovaTech Solutions.</p>
      <nav className="flex gap-4">
        <Link to="/" className="text-sm text-blue-500 underline">Home</Link>
        <Link to="/contact" className="text-sm text-blue-500 underline">Contact</Link>
      </nav>
    </div>
  );
}
