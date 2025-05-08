const NavBarSimplePanel = ({children }) => {
  return (
    <div className="absolute top-full mt-3 left-1/2
     transform -translate-x-1/2 z-50 
     w-[750px] 
    h-[400px]
     max-h-[80vh]
     max-w-[95vw]
      focus:outline-none  overflow-hidden
       rounded-xl shadow-2xl  border 
       border-button-theme backdrop-blur-md bg-button-neutral-gradient">
    {children }
    </div>
  );
};

export default NavBarSimplePanel;
  