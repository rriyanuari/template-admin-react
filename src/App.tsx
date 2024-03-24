import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/atoms/darkMode/theme-provider";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import { renderRoute } from "./routes/RenderRoutes";
import { PrivateRoute, PublicRoute } from "./routes/AccessRoutes";

import Login from "@/pages/authentication/login";
import { Loader } from "@/components/atoms/loader";
import { Toaster } from "@/components/ui/toaster";
import AdminLayout from "@/components/organism/adminLayout";

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
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Login />} />
          </Route>

          {/* Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<AdminLayout />}>
              {/* Mapping Routes */}
              {routes.map(renderRoute)}
            </Route>
          </Route>
        </Routes>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
