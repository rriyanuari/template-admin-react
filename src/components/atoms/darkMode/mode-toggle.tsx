import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/stores/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const _handleToggle = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <Button variant="outline" size="icon" onClick={_handleToggle}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
