import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return <h1 className="text-2xl">Home</h1>;
}
function About() {
  return <h1 className="text-2xl">About</h1>;
}
function Contact() {
  return <h1 className="text-2xl">Contact</h1>;
}
function NotFound() {
  return <h1 className="text-2xl text-red-500">404 – Page Not Found</h1>;
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
