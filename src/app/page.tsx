import { ChartRenderer as BarChart} from "./components/Bar/ChartRenderer";
import { ChartRenderer as LineChart } from "./components/Line/ChartRenderer";
import { ChartRenderer as PieChart } from "./components/Pie/ChartRenderer";
import { ChartRenderer as AreaChart } from "./components/Area/ChartRenderer";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-4 sm:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-screen-lg">
        <div className="bg-gray-200 p-4"><LineChart /></div>
        <div className="bg-gray-200 p-4"><PieChart /></div>
        <div className="bg-gray-200 p-4"><BarChart /></div>
        <div className="bg-gray-200 p-4"><AreaChart /></div>
      </div>
    </main>
  );
}
