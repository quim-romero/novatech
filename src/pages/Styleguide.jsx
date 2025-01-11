import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
import Tabs from "../components/ui/Tabs";

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

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Typography
          </h2>
          <p className="text-lg font-semibold">Heading</p>
          <p className="text-base">Body text sample with neutral contrast.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Caption text with subtle tone.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Brand Colors
          </h2>
          <div className="flex gap-6">
            <div className="w-20 h-20 bg-brand rounded-lg shadow-inner"></div>
            <div className="w-20 h-20 bg-brand-dark rounded-lg shadow-inner"></div>
            <div className="w-20 h-20 bg-brand-light rounded-lg shadow-inner"></div>
          </div>
        </div>

        <div className="mt-8"></div>
        <Input label="Email address" placeholder="you@company.com" />

        <div className="mt-8 space-x-2">
          <Badge>Default</Badge>
          <Badge color="green">Success</Badge>
          <Badge color="red">Error</Badge>
          <Badge color="blue">Info</Badge>
        </div>

        <div className="mt-12"></div>
        <Tabs
          tabs={[
            {
              label: "Design",
              content: <p>Design system tokens, spacing, color.</p>,
            },
            { label: "Components", content: <p>Buttons, forms, UI kit.</p> },
            {
              label: "Accessibility",
              content: <p>WCAG, aria roles, color contrast.</p>,
            },
          ]}
        />

        <div className="mt-12 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Layout & Spacing
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-brand text-white text-center py-6 rounded">
              Grid 1
            </div>
            <div className="bg-brand-dark text-white text-center py-6 rounded">
              Grid 2
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
