import { lazy } from "react";

const Dashboard = lazy(() => import("@/pages/dashboard"));

const Products = lazy(() => import("@/pages/products"));
const ProductForm = lazy(() => import("@/pages/products/productForm"));

const Users = lazy(() => import("@/pages/users"));
const UserForm = lazy(() => import("@/pages/users/form"));

const Variables = lazy(() => import("@/pages/variables"));
const VariableForm = lazy(() => import("@/pages/variables/form"));

const CustomerPage = lazy(() => import("@/pages/customers/"));

const Settings = lazy(() => import("@/pages/settings"));

const coreRoutes = [
  {
    path: "dashboard",
    subRoutes: [
      {
        path: "",
        title: "Dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    path: "users",
    subRoutes: [
      {
        path: "",
        title: "List User",
        component: Users,
      },
      {
        path: "create",
        title: "Create User",
        component: UserForm,
      },
    ],
  },
  {
    path: "variables",
    subRoutes: [
      {
        path: "",
        title: "List Variable",
        component: Variables,
      },
      {
        path: "create",
        title: "Create Variable",
        component: VariableForm,
      },
    ],
  },
  {
    path: "products",
    subRoutes: [
      {
        path: "",
        title: "Products",
        component: Products,
      },
      {
        path: "create",
        title: "Create Product",
        component: ProductForm,
      },
    ],
  },
  {
    path: "customers",
    subRoutes: [
      {
        path: "",
        title: "Customers",
        component: CustomerPage,
      },
    ],
  },
  {
    path: "settings",
    subRoutes: [
      {
        path: "",
        title: "Settings",
        component: Settings,
      },
    ],
  },
];

const routes = [...coreRoutes];
export default routes;
