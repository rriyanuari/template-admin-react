import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import { Loader } from "@/components/atoms/loader";

interface RouteProps {
  path: string;
  component?: React.ComponentType<any>;
  subRoutes?: RouteProps[];
}

export const renderRoute = (route: RouteProps, index: number) => {
  const { path, subRoutes } = route;

  return (
    <Route key={index} path={path}>
      {subRoutes && renderSubRoutes(subRoutes)}
    </Route>
  );
};

const renderSubRoutes = (subRoutes: RouteProps[]) => (
  <>
    {subRoutes.map((subRoute, subIndex) => (
      <Route
        key={subIndex}
        path={subRoute.path}
        element={
          <Suspense fallback={<Loader />}>
            {subRoute.component && React.createElement(subRoute.component)}
          </Suspense>
        }
      />
    ))}
  </>
);
