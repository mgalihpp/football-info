import { Loader2 } from "lucide-react";

const loading = () => {
  return (
    <div className="w-[600px]">
      Loading <Loader2 className="h-4 w-4 ml-1.5 animate-spin" />
    </div>
  );
};

export default loading;
