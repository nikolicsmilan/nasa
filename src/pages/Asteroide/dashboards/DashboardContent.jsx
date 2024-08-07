import GeneralDashboard from "./GeneralDashboard";
import { GraphContent } from "./GraphContent";
import { MyConsoleContext } from "../../../context/ConsoleContext";

export const DashboardContent = () => {
  const { statusTable } = MyConsoleContext();
  if (statusTable.dashboard === "general") {
    return <GeneralDashboard />;
  }

  if (statusTable.dashboard === "graph") {
    return <GraphContent />;
  }

  return (
    <div className="flex border-0 p-2 border-lime-400 w-full justify-center">
      <h1>This console is under development</h1>
    </div>
  );
};
