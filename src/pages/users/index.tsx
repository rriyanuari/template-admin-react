import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getEmployee } from "@/services";
import { useQuery } from "react-query";

const List = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployee,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  console.log(data.data);

  return (
    <main className="container flex flex-1 flex-col gap-4">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Users</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your users @ this app
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Link to="create">
            <Button className="gap-2">
              <Plus className="w-6 h-6" />
              Add new user
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no users
          </h3>
          <Link to="create">
            <Button className="mt-6 gap-2">
              <Plus className="w-6 h-6" />
              Add new user
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default List;
