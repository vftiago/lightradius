import { ThemeToggle } from "@/components/theme-toggle";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <span className="text-xl font-bold lowercase tracking-tight">lightradius</span>
        <ThemeToggle />
      </div>
    </header>
  );
};
