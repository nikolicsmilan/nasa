
const SquareminConsole = ({ title,value }) => {
  return (

 <div className="glowy-button-3  glowy-button-5 text-primary text-center h-40  w-40 p-2 rounded-lg shadow m-3 flex flex-col justify-between">
      <h2 className="text-lg font-semibold  ">{title}</h2>
      <p className="flex-grow flex items-center justify-center text-3xl">{value}</p>
      <p className="mt-auto">No Danger</p>
    </div>
 
   
  );
};

export default SquareminConsole;
//bg-gradient glowy-button-6
////bg-gradient glowy-button-6 glowy-button-5 bg-gradient

/*return (
  <div className="bg-gradient  glowy-button-5 text-primary text-center min-w-40 max-w-32 h-32  w-48 p-2 rounded-lg shadow m-1 flex flex-col justify-between">
  <h2 className="text-lg font-semibold text-sky-950">{title}</h2>
  <p className="flex-grow flex items-center justify-center text-3xl">{value}</p>
  <p className="mt-auto">No Danger</p>
</div> */