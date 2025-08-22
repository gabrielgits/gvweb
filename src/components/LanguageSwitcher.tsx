import { useLanguage } from '../hooks/useLanguage';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-300 ${
          language === 'en' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
      >
        EN
      </button>
      <span className="text-gray-400 dark:text-gray-500">|</span>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 rounded text-sm font-medium transition-colors duration-300 ${
          language === 'pt' 
            ? 'bg-blue-500 text-white' 
            : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;