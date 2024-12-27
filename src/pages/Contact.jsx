import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-brand">Contact Page</h1>
      <p className="text-gray-600">Get in touch with us.</p>
      <nav className="flex gap-4">
        <Link to="/" className="text-sm text-blue-500 underline">Home</Link>
        <Link to="/about" className="text-sm text-blue-500 underline">About</Link>
      </nav>
    </div>
  );
}
