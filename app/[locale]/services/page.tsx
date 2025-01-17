'use client';

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
import { ServicesStructuredData } from '../../components/structured-data'
import { Suspense } from 'react'
import { ServiceCard } from '../../components/services/service-card'
import { EnterpriseFeature } from '../../components/services/enterprise-feature'
import { LoadingSpinner } from '../../components/ui/loading-spinner'
import ErrorBoundary from '../../components/error-boundary'
import { useTranslation } from "@/app/i18n/hooks/useTranslation";

export { runtime } from '@/app/config/runtime';

export default function Services() {
  const { t } = useTranslation();

  return (
    <>
      <ServicesStructuredData />
      <ErrorBoundary>
        <div className="p-8 bg-background">
          <main className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('services.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Services Grid */}
            <Suspense fallback={<LoadingSpinner />}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                  icon={<Wand2 className="h-6 w-6" />}
                  title={t('services.features.aiGeneration.title')}
                  description={t('services.features.aiGeneration.description')}
                />

                <ServiceCard
                  icon={<Palette className="h-6 w-6" />}
                  title={t('services.features.customization.title')}
                  description={t('services.features.customization.description')}
                />

                <ServiceCard
                  icon={<Share2 className="h-6 w-6" />}
                  title={t('services.features.sharing.title')}
                  description={t('services.features.sharing.description')}
                />

                <ServiceCard
                  icon={<Download className="h-6 w-6" />}
                  title={t('services.features.export.title')}
                  description={t('services.features.export.description')}
                />

                <ServiceCard
                  icon={<Zap className="h-6 w-6" />}
                  title={t('services.features.priority.title')}
                  description={t('services.features.priority.description')}
                />

                <ServiceCard
                  icon={<Shield className="h-6 w-6" />}
                  title={t('services.features.license.title')}
                  description={t('services.features.license.description')}
                />
              </div>
            </Suspense>

            {/* Enterprise Section */}
            <Suspense fallback={<LoadingSpinner />}>
              <div className="mt-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8 md:p-12">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {t('services.enterprise.title')}
                  </h2>
                  <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                    {t('services.enterprise.subtitle')}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <EnterpriseFeature
                      icon={<Users className="h-5 w-5" />}
                      title={t('services.enterprise.features.team.title')}
                      description={t('services.enterprise.features.team.description')}
                    />
                    <EnterpriseFeature
                      icon={<Shield className="h-5 w-5" />}
                      title={t('services.enterprise.features.security.title')}
                      description={t('services.enterprise.features.security.description')}
                    />
                    <EnterpriseFeature
                      icon={<Palette className="h-5 w-5" />}
                      title={t('services.enterprise.features.styling.title')}
                      description={t('services.enterprise.features.styling.description')}
                    />
                    <EnterpriseFeature
                      icon={<MessageSquare className="h-5 w-5" />}
                      title={t('services.enterprise.features.support.title')}
                      description={t('services.enterprise.features.support.description')}
                    />
                  </div>
                  <Link href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                      {t('services.enterprise.cta')}
                    </Button>
                  </Link>
                </div>
              </div>
            </Suspense>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {t('services.finalCta.title')}
              </h2>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                {t('services.finalCta.subtitle')}
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="/products">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    {t('services.finalCta.pricing')}
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline">
                    {t('services.finalCta.try')}
                  </Button>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </ErrorBoundary>
    </>
  );
} 