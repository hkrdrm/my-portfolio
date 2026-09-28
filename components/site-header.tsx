import NextImage from "next/image";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "mailto:tspiers84@gmail.com" },
];

export const SiteHeader = () => {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between gap-x-12 gap-y-3 px-6 py-4">
        <a href="/" aria-label="Matt Spiers home">
          <NextImage
            priority
            alt="Matt Spiers"
            className="h-12 w-auto"
            height={136}
            src="/images/site/logo.png"
            width={470}
          />
        </a>

        <nav className="flex flex-1 items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              className="text-lg text-cream/80 transition-colors hover:text-cream"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="text-xs font-medium uppercase tracking-[0.15em] text-cream/80 hover:text-cream"
          href="mailto:tspiers84@gmail.com"
        >
          tspiers84@gmail.com
        </a>
      </div>
    </header>
  );
};
