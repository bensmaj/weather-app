import { CloudRain, Wind } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

/**
 *
 * @returns - A skeleton card for when no forecast data is available
 */
export function ForecastSkeleton() {
  return (
    <div className="border rounded-lg p-4 md:w-[450px] w-full shadow">
      <Skeleton className="h-[30px] w-[130px] mx-auto" />
      <Skeleton className="h-[40px] w-[40px] mb-2" />
      <div>
        <div className="text-xl flex gap-3">
          <Skeleton className="h-[20px] w-[100px]" />
          °F
        </div>
        <div className="flex gap-2 items-center mb-3">
          <Wind size={15} />
          <Skeleton className="h-[15px] w-[100px]" />
        </div>
        <div className="flex gap-2 items-center">
          <CloudRain size={15} />
          <Skeleton className="h-[15px] w-[100px]" />
        </div>
      </div>
      <Skeleton className="h-[220px] w-[400px] mt-4" />
    </div>
  );
}
