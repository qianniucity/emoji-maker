'use client';

import { Button } from "@/app/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/hooks/useTranslation";

export default function Products() {
  const { t } = useTranslation();

  // 获取特性列表
  const getFreeFeatures = () => {
    const features = [];
    for (let i = 0; i < 5; i++) {
      const feature = t(`products.plans.free.features.${i}`);
      if (feature) features.push(feature);
    }
    return features;
  };

  const getProFeatures = () => {
    const features = [];
    for (let i = 0; i < 5; i++) {
      const feature = t(`products.plans.pro.features.${i}`);
      if (feature) features.push(feature);
    }
    return features;
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8 bg-background">
      <main className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('products.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
            <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-100 px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              {t('products.plans.free.tag')}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('products.plans.free.title')}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{t('products.plans.free.price')}</span>
              <span className="text-gray-600 dark:text-gray-400">{t('products.plans.free.period')}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {getFreeFeatures().map((feature, index) => (
                <Feature key={index} text={feature} />
              ))}
            </ul>
            <Button className="w-full" variant="outline">
              {t('products.plans.free.cta')}
            </Button>
          </div>

          {/* Pro Tier */}
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl shadow-lg p-8 border border-blue-200 dark:border-blue-700">
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-xl text-sm font-medium">
              {t('products.plans.pro.tag')}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('products.plans.pro.title')}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">{t('products.plans.pro.price')}</span>
              <span className="text-gray-600">{t('products.plans.pro.period')}</span>
            </div>
            <ul className="space-y-4 mb-8">
              {getProFeatures().map((feature, index) => (
                <Feature key={index} text={feature} />
              ))}
            </ul>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              {t('products.plans.pro.cta')}
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">{t('products.faq.title')}</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem 
              question={t('products.faq.items.free.question')}
              answer={t('products.faq.items.free.answer')}
            />
            <FAQItem 
              question={t('products.faq.items.upgrade.question')}
              answer={t('products.faq.items.upgrade.answer')}
            />
            <FAQItem 
              question={t('products.faq.items.refund.question')}
              answer={t('products.faq.items.refund.answer')}
            />
            <FAQItem 
              question={t('products.faq.items.commercial.question')}
              answer={t('products.faq.items.commercial.answer')}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">{t('products.cta.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('products.cta.subtitle')}
          </p>
          <Link href="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              {t('products.cta.button')}
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