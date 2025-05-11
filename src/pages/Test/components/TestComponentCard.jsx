// src/pages/Test/components/TestComponentCard.jsx

const TestComponentCard = ({ name, status, Component, props: componentProps, description }) => {
  // A componentProps-t szétbontjuk, ha a ComingSoonCard-nak adjuk át
  const placeholderProps = status === "coming_soon" ? { name, description, ...componentProps } : {};

  return (
    <div className="bg-neutral-800/30 backdrop-blur-sm rounded-xl shadow-lg p-1 border border-neutral-700/50 flex flex-col min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
      {/* A kártya címe továbbra is a komponens neve, de a Placeholder-nek is átadjuk */}
      <h3 className="text-sm font-semibold text-primary p-3 border-b border-neutral-700/50 mb-1 text-center truncate">
        {name}
      </h3>
      <div className="flex-grow flex items-center justify-center overflow-hidden p-1">
        {status === "ready" && Component ? (
          <Component {...componentProps} />
        ) : (
          // Itt a ComingSoonCard-ot használjuk, ha a Component maga a ComingSoonCard
          // vagy ha status === "coming_soon" és Component === null
          Component && Component.name === "ComingSoonCard" ? (
             <Component {...placeholderProps} />
          ) : (
            // Általános fallback, ha valamiért se nem 'ready', se nem a placeholder van hozzárendelve
            <div className="text-neutral-500">Error: Component not properly configured.</div>
          )
        )}
      </div>
    </div>
  );
};

export default TestComponentCard;