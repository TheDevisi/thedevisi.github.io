import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and about */}
          <div className="col-span-1 space-y-4">
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TheDevisi
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Создаю ужасные приложения, проекты, сайты и идеи. Мои советы лучше не слушать.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              {['Домой', ' ̶О̶ ̶н̶а̶с̶ Обо мне', 'Портфолио'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Контакты
            </h3>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400">
                Россия, Южно-Сахалинск, горнолыжный курорт - Горный Воздух.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                devisi@thedevisi.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                +8 (800) 555-3535
              </p>
              <div className="flex space-x-4 mt-4">
                {[
                  { icon: <Twitter size={18} />, href: 'https://x.com/ThisIsDevisi' },
                  { icon: <Github size={18} />, href: 'https://github.com/TheDevisi' },
                  { icon: <Mail size={18} />, href: 'mailto:devisinov@gmail.com' }
                ].map((item, index) => (
                  <a 
                    key={index}
                    href={item.href}
                    className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                    aria-label="Social media"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} TheDevisi. Все права не защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;