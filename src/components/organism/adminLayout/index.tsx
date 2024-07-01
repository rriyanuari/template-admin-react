import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { TooltipProvider } from "@/components/ui/tooltip";
import { useSidebar } from "@/stores/sidebar-provider";

import { Loader } from "@/components/atoms/loader";
import { Sidebar } from "@/components/molecules/sidebar";
import Navbar from "@/components/molecules/navbar";

const AdminLayout = () => {
  const { isSmSidebar, toggleSidebar } = useSidebar();

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div
          className={`ml-auto flex flex-col w-full ${
            isSmSidebar
              ? "lg:w-[calc(100%-var(--sidebarwsm))]"
              : "lg:w-[calc(100%-var(--sidebarw))]"
          }`}
        >
          <Navbar />
          <main className="flex flex-1 flex-col gap-4 p-2 lg:gap-6 lg:p-6 mt-16">
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default AdminLayout;
