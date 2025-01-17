'use client';

import { memo } from 'react';
import { Button } from '../button';
import { Label } from '../label';
import { Switch } from '../switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../tooltip';
import { Moon, Sun, Github, X, Tv, Youtube } from 'lucide-react';

// Memoized social media button component
const SocialButton = memo(({ 
  href, 
  icon: Icon, 
  label, 
  tooltip 
}: { 
  href: string;
  icon: React.ElementType;
  label: string;
  tooltip: string;
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="h-4 w-4" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
));

SocialButton.displayName = 'SocialButton';

interface SocialSectionProps {
  t: (key: string) => string;
  theme: string;
  onThemeChange: (checked: boolean) => void;
}

const SocialSection = memo(({ t, theme, onThemeChange }: SocialSectionProps) => {
  const socialLinks = [
    {
      href: "https://space.bilibili.com/12494395",
      icon: Tv,
      label: "Bilibili",
      tooltip: t('footer.followUs.bilibili')
    },
    {
      href: "https://x.com/esx_ai",
      icon: X,
      label: "X",
      tooltip: "Follow us on X"
    },
    {
      href: "https://www.youtube.com/@brotheraitalk",
      icon: Youtube,
      label: "Youtube",
      tooltip: "Follow us on Youtube"
    },
    {
      href: "https://github.com/qianniucity/emoji-maker",
      icon: Github,
      label: "Github",
      tooltip: "Connect with us on Github"
    }
  ];

  return (
    <div className="relative">
      <h3 className="mb-4 text-lg font-semibold">{t('footer.followUs.title')}</h3>
      <div className="mb-6 flex space-x-4">
        {socialLinks.map((social) => (
          <SocialButton key={social.label} {...social} />
        ))}
      </div>
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4" />
        <Switch
          id="dark-mode"
          checked={theme === "dark"}
          onCheckedChange={onThemeChange}
        />
        <Moon className="h-4 w-4" />
        <Label htmlFor="dark-mode" className="sr-only">
          {t('footer.darkMode')}
        </Label>
      </div>
    </div>
  );
});

SocialSection.displayName = 'SocialSection';

export default SocialSection; 