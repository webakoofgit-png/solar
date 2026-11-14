import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, dark = true }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm">
        <li>
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              dark ? 'text-slate-400 hover:text-amber-400' : 'text-slate-500 hover:text-amber-600'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-2">
              <ChevronRight
                className={`w-3.5 h-3.5 ${dark ? 'text-slate-600' : 'text-slate-400'}`}
              />
              {item.path && !isLast ? (
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    dark ? 'text-slate-400 hover:text-amber-400' : 'text-slate-600 hover:text-amber-600'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-medium ${
                    dark ? 'text-amber-400' : 'text-slate-900'
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
