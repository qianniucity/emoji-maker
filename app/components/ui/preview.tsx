import { useTranslation } from "@/app/i18n/hooks/useTranslation"
import { Typewriter } from "@/app/components/ui/typewriter"
import Image from "next/image"

function Preview() {
  const { t } = useTranslation()
  
  return (
    <div className="w-full md:text-4xl lg:text-5xl sm:text-3xl text-2xl flex flex-row items-start justify-start bg-background font-normal overflow-hidden p-8">
      <p className="whitespace-pre-wrap min-h-[4rem]">
        <span>{t('preview.prefix')} 
        <Image
              src="/icon-192x192.png"
              alt="logo"
              width={50}
              height={50}
              className="inline-block mx-1"
            />
        </span>
        <Typewriter
          text={[
            t('preview.typewriter.create'),
            t('preview.typewriter.customize'),
            t('preview.typewriter.express'),
            t('preview.typewriter.share'),
            t('preview.typewriter.inspire'),
          ]}
          speed={70}
          className="text-yellow-500 inline-block"
          waitTime={1500}
          deleteSpeed={40}
          cursorChar={"_"}
        />
      </p>
    </div>
  )
}

export { Preview } 