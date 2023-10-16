import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

const loading = () => {
  const skeletons = [];
  for (let i = 0; i < 5; i++) {
    skeletons.push(<Skeleton key={i} className="w-full h-16 mt-2" />);
  }

  return (
    <main className="md:w-[600px] mx-auto px-2 md:px-4">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <Skeleton className="w-52 mr-4 space-y-2 h-8" />
        <div className="py-0 md:py-1 rounded-md">
          <Skeleton className="w-52 ml-4 space-y-2 h-8" />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Skeleton className="w-24  h-10" />
        <Skeleton className="w-24  h-10" />
        <Skeleton className="w-24  h-10" />
        <Skeleton className="w-24  h-10" />
        <Skeleton className="w-24  h-10" />
      </div>
      {skeletons}
    </main>
  );
};

export default loading;
