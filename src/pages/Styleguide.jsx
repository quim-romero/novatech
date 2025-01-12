import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Badge from "../components/ui/Badge";
import Tabs from "../components/ui/Tabs";
import Card from "../components/ui/Card";

export default function Styleguide() {
  const [showToast, setShowToast] = useState(false);

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Helmet>
        <title>Styleguide – NovaTech</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          NovaTech UI Styleguide
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-2xl">
          This style guide showcases practical examples of components,
          typography, colors, spacing, and other design system elements I use to
          build modern, accessible, and scalable interfaces.
        </p>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Buttons
          </h2>
          <div className="space-x-4">
            <Button onClick={triggerToast}>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          {showToast && (
            <div className="fixed bottom-6 right-6 bg-brand text-white px-4 py-2 rounded shadow-lg animate-fade-in">
              This is a toast notification!
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Typography
          </h2>
          <p className="text-lg font-semibold">Heading</p>
          <p className="text-base">Body text sample with neutral contrast.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Caption text with subtle tone.
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Brand Colors
          </h2>
          <div className="flex gap-6">
            <div className="w-20 h-20 bg-brand rounded-lg shadow-inner"></div>
            <div className="w-20 h-20 bg-brand-dark rounded-lg shadow-inner"></div>
            <div className="w-20 h-20 bg-brand-light rounded-lg shadow-inner"></div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Input
          </h2>
          <Input label="Email address" placeholder="you@company.com" />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Badges
          </h2>
          <div className="space-x-2">
            <Badge>Default</Badge>
            <Badge color="green">Success</Badge>
            <Badge color="red">Error</Badge>
            <Badge color="blue">Info</Badge>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Tabs
          </h2>
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
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
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

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Shadows
          </h2>
          <div className="flex gap-6">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded shadow-sm" />
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded shadow-md" />
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded shadow-lg" />
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Cards
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Feature">
              Scalable cloud infrastructure with automated provisioning and
              monitoring.
            </Card>
            <Card title="AI Integration">
              Deploy NLP models and computer vision with NovaTech APIs.
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Loading Spinner
          </h2>
          <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto" />
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 my-12" />

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Skeleton Placeholder
          </h2>
          <div className="space-y-3">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
}
