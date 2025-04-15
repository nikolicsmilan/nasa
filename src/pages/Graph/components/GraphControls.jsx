import Super3dConsole from "../../../components/consoles/views/Super3dConsole"

const GraphControls = ({graphdatasource}) => {
  return (
    <div className="flex flex-col   border-lime-400  ">
   
    {
         graphdatasource.map((item, index) => (
           <div
             key={index}
             className="relative border-400  my-1 border-0 p-2 "
           >
             <Super3dConsole
               nameconsole={item.name}
               data={item.data}
               description="Ide funkciók kellenek gombok szűrők  adatbázis alapján"
             />
           </div>
         ))}
     </div>
  )
}

export default GraphControls