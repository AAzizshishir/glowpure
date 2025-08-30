// "use client";

// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";

// export function ThemeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <div className="flex gap-2">
//       <Button onClick={() => setTheme("light")}>Light</Button>
//       <Button onClick={() => setTheme("dark")}>Dark</Button>
//     </div>
//   );
// }

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border dark:border-white border-zinc-300"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-zinc-800" />
      )}
    </Button>
  );
}
