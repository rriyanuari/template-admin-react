import { lazy, useEffect, useState } from "react";
import { ThemeProvider } from "@/stores/theme-provider";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import { renderRoute } from "./routes/RenderRoutes";
import { PrivateRoute, PublicRoute } from "./routes/AccessRoutes";

const Dashboard = lazy(() => import("@/pages/dashboard"));
const Login = lazy(() => import("@/pages/authentication/login"));

import { Loader } from "@/components/atoms/loader";
import { Toaster } from "@/components/ui/toaster";
import AdminLayout from "@/components/organism/adminLayout";
import { SidebarProvider } from "./stores/sidebar-provider";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider>
          <Routes>
            {/* Public Routes */}
            <Route element={<PublicRoute />}>
              <Route path="/auth" element={<Login />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<AdminLayout />}>
                <Route path="/" element={<Dashboard />} />

                {/* Mapping Routes */}
                {routes.map(renderRoute)}
              </Route>
            </Route>
          </Routes>
          <Toaster />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
