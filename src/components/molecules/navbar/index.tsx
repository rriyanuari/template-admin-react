import { ModeToggle } from "@/components/atoms/darkMode/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ArrowRight, CircleUser, Menu, Search } from "lucide-react";
import { SidebarSm } from "../sidebar";
import { useSidebar } from "@/stores/sidebar-provider";

const Navbar = () => {
  const { isSmSidebar, toggleSidebar } = useSidebar();

  return (
    <header
      className={`z-50 fixed w-full flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 ${
        isSmSidebar
          ? "lg:w-[calc(100%-var(--sidebarwsm))]"
          : "lg:w-[calc(100%-var(--sidebarw))]"
      }`}
    >
      <SidebarSm />
      <Button
        variant="outline"
        size="icon"
        className="hidden lg:flex"
        onClick={toggleSidebar}
      >
        {isSmSidebar ? (
          <ArrowRight className="h-5 w-5" />
        ) : (
          <ArrowLeft className="h-5 w-5" />
        )}
      </Button>

      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
