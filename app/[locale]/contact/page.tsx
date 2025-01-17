'use client';

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Mail, MessageSquare, Github, X } from "lucide-react";
import { useTranslation } from "@/app/i18n/hooks/useTranslation";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="p-8 bg-background">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              {t('contact.form.title')}
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.name')}
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  className="w-full bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.email')}
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  className="w-full bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.subject')}
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  className="w-full bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('contact.form.message')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  className="w-full min-h-[150px] bg-white dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400"
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {t('contact.form.send')}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                {t('contact.quickContact.title')}
              </h2>
              <div className="space-y-4">
                <a 
                  href="mailto:king101125s@gmail.com" 
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>king101125s@gmail.com</span>
                </a>
                <a 
                  href="https://x.com/esx_ai" 
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span>{t('contact.quickContact.twitter')}</span>
                </a>
                <a 
                  href="https://github.com/qianniucity/emoji-maker" 
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>{t('contact.quickContact.github')}</span>
                </a>
              </div>
            </div>

            {/* FAQ Preview */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                {t('contact.faq.title')}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {t('contact.faq.questions.credits.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('contact.faq.questions.credits.answer')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {t('contact.faq.questions.commercial.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('contact.faq.questions.commercial.answer')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {t('contact.faq.questions.support.title')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {t('contact.faq.questions.support.answer')}{' '}
                      <a href="/docs" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {t('contact.faq.questions.support.docs')}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p>{t('contact.responseTime.notice')}</p>
          <p className="mt-2">
            {t('contact.responseTime.immediate')}{' '}
            <a href="/docs" className="text-blue-600 dark:text-blue-400 hover:underline">
              {t('contact.responseTime.docs')}
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
} 

export const runtime = 'edge'; 