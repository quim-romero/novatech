import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";

export default function Styleguide() {
  return (
    <>
      <Helmet>
        <title>Styleguide – NovaTech</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white">
          NovaTech Styleguide
        </h1>

        <div className="space-x-4">
          <Button>Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    </>
  );
}
