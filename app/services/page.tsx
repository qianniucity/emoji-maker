import type { Metadata } from 'next'
import { defaultMetadata } from '../config/metadata'
import { Button } from "@/app/components/ui/button";
import { 
  Wand2,
  Palette,
  Share2,
  Download,
  Zap,
  Shield,
  Users,
  MessageSquare
} from "lucide-react";
import Link from "next/link";
import { ServicesStructuredData } from '../components/structured-data'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our AI-powered emoji creation services and enterprise solutions',
  openGraph: {
    ...defaultMetadata.openGraph,
    title: 'Our Services | Emoji Maker',
    description: 'Explore our AI-powered emoji creation services and enterprise solutions'
  }
}

export default function Services() {
  return (
    <>
      <ServicesStructuredData />
      <div className="p-8 bg-background">
        <main className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transform your ideas into expressive emojis with our AI-powered tools
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Wand2 className="h-6 w-6" />}
              title="AI Emoji Generation"
              description="Turn your ideas into custom emojis in seconds using our cutting-edge AI technology. Perfect for creating unique expressions."
            />

            <ServiceCard
              icon={<Palette className="h-6 w-6" />}
              title="Style Customization"
              description="Choose from various artistic styles, or create your own. Adjust colors, expressions, and details to match your brand."
            />

            <ServiceCard
              icon={<Share2 className="h-6 w-6" />}
              title="Easy Sharing"
              description="Share your creations directly to social media or export them for use in your favorite messaging apps."
            />

            <ServiceCard
              icon={<Download className="h-6 w-6" />}
              title="Batch Export"
              description="Download your emojis in multiple formats and sizes. Perfect for different platforms and use cases."
            />

            <ServiceCard
              icon={<Zap className="h-6 w-6" />}
              title="Priority Processing"
              description="Skip the queue with our Pro plan. Get faster generation times and priority support when you need it most."
            />

            <ServiceCard
              icon={<Shield className="h-6 w-6" />}
              title="Commercial License"
              description="Use your generated emojis in commercial projects with our Pro plan. Full rights included."
            />
          </div>

          {/* Enterprise Section */}
          <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Enterprise Solutions
              </h2>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                Need a custom solution for your business? We offer enterprise-grade features including:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <EnterpriseFeature
                  icon={<Users className="h-5 w-5" />}
                  title="Team Management"
                  description="Manage multiple users, roles, and permissions."
                />
                <EnterpriseFeature
                  icon={<Shield className="h-5 w-5" />}
                  title="Enhanced Security"
                  description="Advanced security features and dedicated infrastructure."
                />
                <EnterpriseFeature
                  icon={<Palette className="h-5 w-5" />}
                  title="Custom Styling"
                  description="Brand-specific style presets and guidelines."
                />
                <EnterpriseFeature
                  icon={<MessageSquare className="h-5 w-5" />}
                  title="Dedicated Support"
                  description="24/7 priority support and consultation."
                />
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to get started?
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Join thousands of creators and businesses already using our platform
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Pricing
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="outline">
                  Try for Free
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

// Helper Components
function ServiceCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

function EnterpriseFeature({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      </div>
      <div className="text-left">
        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
} 