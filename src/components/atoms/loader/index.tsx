import { Skeleton } from "@/components/ui/skeleton";

export const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="loader" />
    </div>
  );
};

export const SkeletonTable = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex">
        <Skeleton className="h-10 w-full" />
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      ))}
    </div>
  );
};
