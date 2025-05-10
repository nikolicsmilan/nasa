// src/pages/Test/components/TestCategoryNavigator.jsx
import React, { useState } from 'react';
import { testPageComponentsData } from '../../locales/testPageComponentsData';
import TestComponentCard from './TestComponentCard';

const TestCategoryNavigator = () => {
  const [activeCategoryKey, setActiveCategoryKey] = useState(testPageComponentsData[0]?.key || null);

  const activeCategory = testPageComponentsData.find(cat => cat.key === activeCategoryKey);

  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      {/* Felső Navigációs Sáv a Kategória Gombokkal */}
      <div className="w-full sticky top-0 z-30 bg-neutral-900/80 backdrop-blur-md shadow-lg p-3 mb-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-3 gap-y-2">
          {testPageComponentsData.map(({ key, name, Icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategoryKey(key)}
              title={name}
              className={`
                flex items-center justify-center gap-2 px-3 py-1.5 rounded-md
                text-xs sm:text-sm font-semibold transition-all duration-200 ease-in-out
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800
                ${activeCategoryKey === key
                  ? 'bg-primary text-primary-content shadow-lg scale-105 ring-1 ring-primary'
                  : 'bg-neutral-700/70 text-neutral-300 hover:bg-neutral-600/90 hover:text-white'
                }
              `}
            >
              {Icon && <Icon className="text-sm sm:text-base flex-shrink-0" />}
              <span className="hidden md:inline">{name}</span> {/* Desktop: név látszik */}
              <span className="md:hidden">{Icon ? name : name}</span> {/* Mobil: név látszik (vagy csak ikon, ha a nevet törlöd innen) */}
            </button>
          ))}
        </div>
      </div>

      {/* Aktív Kategória Komponenseinek Megjelenítése Kártyákban */}
      <main className="w-full flex-grow px-4 pb-8">
        {activeCategory ? (
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">
              {activeCategory.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategory.components.map(comp => (
                <TestComponentCard
                  key={comp.key}
                  name={comp.name}
                  status={comp.status}
                  Component={comp.Component}
                  props={comp.props} // Átadjuk a placeholdernek szánt propokat
                  description={comp.description} // Átadjuk a leírást a kártyának
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-neutral-500 py-10">Please select a category.</div>
        )}
      </main>
    </div>
  );
};

export default TestCategoryNavigator;