import { Loader2 } from "lucide-react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl">PLease Select Leagues</h1>
      <Loader2 className="h-4 w-4 m-1.5 animate-spin" />
    </div>
  );
};

export default page;
