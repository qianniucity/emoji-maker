import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/app/components/ui/animated-gradient-text";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/hooks/useTranslation"
export default function AnimatedGradientTextSection() {

  const { locale } = useTranslation();
  return (
    <div className="z-10 flex min-h-8 items-center justify-center">
      <Link href={`/${locale}/products`}>
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Happy New Year!
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </Link>
    </div>
  );
}

export { AnimatedGradientTextSection };