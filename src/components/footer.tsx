import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="text-lg font-bold lowercase">lightradius</span>
          <a className="text-sm text-muted-foreground hover:text-foreground" href="mailto:tiago@lightradius.com">
            tiago@lightradius.com
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground"
            href="https://www.linkedin.com/company/lightradius"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground"
            href="https://github.com/vftiago"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-4xl text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} lightradius. All rights reserved.
      </div>
    </footer>
  );
};
