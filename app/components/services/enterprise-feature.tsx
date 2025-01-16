interface EnterpriseFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function EnterpriseFeature({ icon, title, description }: EnterpriseFeatureProps) {
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