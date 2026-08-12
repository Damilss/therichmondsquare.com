"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";

import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const telHref = `tel:${site.phone.e164}`;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex h-14 shrink-0 items-center rounded-md">
          {/* Square mark with built-in transparent padding — rendered a touch
              larger than the tap target so the visible logo reads well. */}
          <Image
            src={site.assets.logo}
            alt={site.assets.logoAlt}
            width={56}
            height={56}
            loading="eager"
          />
        </a>

        <nav
          aria-label={site.a11y.mainNav}
          className="hidden items-center gap-1 md:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-11 items-center rounded-md px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent/60 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="icon-lg"
            className="size-11 sm:hidden"
            aria-label={`${site.header.phoneCtaLabel} ${site.phone.display}`}
            nativeButton={false}
            render={<a href={telHref} />}
          >
            <Phone aria-hidden="true" />
          </Button>
          <Button
            size="lg"
            className="hidden h-11 sm:inline-flex"
            nativeButton={false}
            render={<a href={telHref} />}
          >
            <Phone data-icon="inline-start" aria-hidden="true" />
            {site.phone.display}
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="size-11 md:hidden"
                  aria-label={site.header.menuLabel}
                />
              }
            >
              <Menu aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{site.header.menuTitle}</SheetTitle>
              </SheetHeader>
              <nav
                aria-label={site.a11y.mobileNav}
                className="flex flex-col gap-1 px-4"
              >
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex h-12 items-center rounded-lg px-3 text-base font-medium text-foreground hover:bg-accent/60"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <SheetFooter>
                <Button
                  size="lg"
                  className="h-11 w-full"
                  nativeButton={false}
                  render={<a href={telHref} />}
                >
                  <Phone data-icon="inline-start" aria-hidden="true" />
                  {site.phone.display}
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
