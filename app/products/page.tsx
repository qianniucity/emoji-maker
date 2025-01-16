import { Button } from "@/app/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-8 bg-background">
      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Unlock your creative potential with our flexible pricing options
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              STARTER
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Free Plan
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <Feature text="3 free emoji generations" />
              <Feature text="Basic emoji customization" />
              <Feature text="Community access" />
              <Feature text="Download generated emojis" />
              <Feature text="Like & share features" />
            </ul>
            <Button className="w-full" variant="outline">
              Get Started
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-blue-700">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Pro Plan
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-600">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <Feature text="Unlimited emoji generations" />
              <Feature text="Advanced customization options" />
              <Feature text="Priority processing" />
              <Feature text="Custom style presets" />
              <Feature text="Early access to new features" />
              <Feature text="Premium support" />
              <Feature text="Commercial usage rights" />
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Upgrade to Pro
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem 
              question="What's included in the free plan?"
              answer="The free plan includes 3 emoji generations, basic customization options, and access to our community features. Perfect for trying out our service!"
            />
            <FAQItem 
              question="Can I upgrade or downgrade at any time?"
              answer="Yes! You can upgrade to Pro whenever you need more features, or downgrade back to the free plan at the end of your billing cycle."
            />
            <FAQItem 
              question="Do you offer refunds?"
              answer="We offer a 7-day money-back guarantee for our Pro plan. If you're not satisfied, just let us know and we'll process your refund."
            />
            <FAQItem 
              question="Can I use the emojis commercially?"
              answer="Pro plan subscribers get full commercial usage rights for all generated emojis. Free plan users can only use emojis for personal projects."
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Ready to start creating?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of creators who are already making awesome emojis
          </p>
          <Link href="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Creating Now
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

// Helper Components
function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2">
      <CheckCircle2 className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
        {question}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{answer}</p>
    </div>
  );
}