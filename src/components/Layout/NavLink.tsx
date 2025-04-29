import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  scrolled: boolean;
}

const NavLink = ({ href, children, scrolled }: NavLinkProps) => {
  const isActive = window.location.hash === href || 
    (href === '#home' && window.location.hash === '');

  return (
    <a
      href={href}
      className={`
        relative font-medium transition-colors duration-300
        ${scrolled 
          ? 'text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
          : 'text-gray-100 hover:text-white dark:text-gray-300 dark:hover:text-white'}
        ${isActive 
          ? 'font-semibold' 
          : 'font-medium'}
      `}
    >
      {children}
      <span className={`
        absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400
        transition-all duration-300 group-hover:w-full
        ${isActive ? 'w-full' : 'w-0'}
      `}></span>
    </a>
  );
};

export default NavLink;