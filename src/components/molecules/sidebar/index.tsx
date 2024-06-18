import { Button } from "@/components/ui/button";
import { useSidebar } from "@/stores/sidebar-provider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Home,
  Menu,
  Package,
  Package2,
  SettingsIcon,
  ShoppingCart,
  Users,
  Users2,
  Variable,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const navigationRoutes: navigationRoutes[] = [
  {
    label: "Dashboard",
    link: "dashboard",
    icon: <Home className="h-6 w-6" />,
    badge: 0,
  },
  {
    label: "Users",
    link: "users",
    icon: <Users2 className="h-6 w-6" />,
    badge: 0,
  },
  {
    label: "Variables",
    link: "variables",
    icon: <Variable className="h-6 w-6" />,
    badge: 0,
  },
  {
    label: "Products",
    link: "products",
    icon: <Package className="h-6 w-6" />,
    badge: 6,
  },
  {
    label: "Customers",
    link: "customers",
    icon: <Users className="h-6 w-6" />,
    badge: 0,
  },
  {
    label: "Orders",
    link: "orders",
    icon: <ShoppingCart className="h-6 w-6" />,
    badge: 10,
  },
];

const bottomNavigationRoutes: navigationRoutes[] = [
  {
    label: "Settings",
    link: "settings",
    icon: <SettingsIcon className="h-6 w-6" />,
    badge: 0,
  },
];

export const SidebarSm = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <div className="flex items-center gap-2 text-lg font-semibold py-3 border-b">
            <Package2 className="h-6 w-6" />
            <span>Acme Inc</span>
          </div>

          {navigationRoutes.map((item, idx) => (
            <NavLink key={idx} to={item.link}>
              {({ isActive }) => (
                <div
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded px-3 py-2 text-muted-foreground hover:text-foreground ${
                    isActive && "bg-primary text-secondary hover:text-secondary"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {item.badge > 0 && (
                    <Badge
                      className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        isActive &&
                        "bg-secondary text-primary hover:text-primary"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t p-2">
          {bottomNavigationRoutes.map((item, idx) => (
            <NavLink key={idx} to={item.link}>
              {({ isActive }) => (
                <div
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded px-3 py-2 text-muted-foreground hover:text-foreground ${
                    isActive && "bg-primary text-secondary hover:text-secondary"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {item.badge > 0 && (
                    <Badge
                      className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        isActive &&
                        "bg-secondary text-primary hover:text-primary"
                      }`}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export const Sidebar = () => {
  const { isSmSidebar } = useSidebar();

  return (
    <aside
      className={`fixed hidden border-r bg-muted/40 lg:block h-screen transition-all duration-500 ${
        isSmSidebar ? "w-[var(--sidebarwsm)]" : "w-[var(--sidebarw)]"
      }`}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div
          className={`flex h-14 items-center border-b lg:h-[60px] ${
            isSmSidebar ? "justify-center" : "lg:px-6"
          }`}
        >
          <span
            className={`flex items-center ${
              isSmSidebar && "justify-center"
            } gap-2 font-semibold`}
          >
            <Package2 className="h-6 w-6" />
            {!isSmSidebar && <span className="">Acme Inc</span>}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="ml-auto h-8 w-8 sr-only"
          >
            {/* <Bell className="h-4 w-4" /> */}
            <span>Toggle notifications</span>
          </Button>
        </div>
        <SimpleBar autoHide={false} className="max-h-[calc(100vh-140px)]">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navigationRoutes.map((item, idx) => (
              <NavLink key={idx} to={item.link}>
                {({ isActive }) => (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`flex items-center gap-3 rounded px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                          isSmSidebar && "justify-center"
                        } ${
                          isActive &&
                          "bg-primary text-primary-foreground hover:text-primary-foreground"
                        }`}
                      >
                        {item.icon}
                        {!isSmSidebar && item.label}
                        {!isSmSidebar && item.badge > 0 && (
                          <Badge
                            className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                              isActive &&
                              "bg-primary-foreground text-primary hover:text-primary"
                            }`}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </TooltipTrigger>
                    {isSmSidebar && (
                      <TooltipContent side="right" sideOffset={5}>
                        {item.label}
                      </TooltipContent>
                    )}
                  </Tooltip>
                )}
              </NavLink>
            ))}
          </nav>
        </SimpleBar>

        <div className="mt-auto border-t p-2">
          {bottomNavigationRoutes.map((item, idx) => (
            <NavLink key={idx} to={item.link}>
              {({ isActive }) => (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`flex items-center gap-3 rounded px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                        isSmSidebar && "justify-center"
                      } ${
                        isActive &&
                        "bg-primary text-primary-foreground hover:text-primary-foreground"
                      }`}
                    >
                      {item.icon}
                      {!isSmSidebar && item.label}
                      {!isSmSidebar && item.badge > 0 && (
                        <Badge
                          className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            isActive &&
                            "bg-primary-foreground text-primary hover:text-primary"
                          }`}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </TooltipTrigger>
                  {isSmSidebar && (
                    <TooltipContent side="right" sideOffset={5}>
                      {item.label}
                    </TooltipContent>
                  )}
                </Tooltip>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
};
