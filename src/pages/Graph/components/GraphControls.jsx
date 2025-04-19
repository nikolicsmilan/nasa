import Super3dConsole from "../../../components/consoles/views/Super3dConsole";

const GraphControls = ({ graphdatasource, handleClick,config  }) => {
  return (
    <div className="flex flex-col   border-lime-400  ">
      {graphdatasource.map((item, index) => (
        <div key={index} className="relative border-400  my-1 border-0 p-2 ">
          <Super3dConsole
            handleClick={handleClick}
            nameconsole={item.name}
            data={item.data}          
            description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
            config={config} 
         />
        </div>
      ))}
    </div>
  );
};

export default GraphControls;
