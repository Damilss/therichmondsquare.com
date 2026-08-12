import Image from "next/image";
import { AtSign, Globe } from "lucide-react";

import { site } from "@/content/site";
import { businesses } from "@/content/businesses";
import { Separator } from "@/components/ui/separator";

const telHref = `tel:${site.phone.e164}`;

// lucide-react v1 removed brand icons. These neutral stand-ins are fine while
// site.social is empty; swap in inline brand SVGs when the links go live.
const socialIcons = {
  instagram: AtSign,
  facebook: Globe,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Image
              src={site.assets.logo}
              alt={site.assets.logoAlt}
              width={64}
              height={64}
            />
            <p className="text-sm text-muted-foreground">{site.footer.blurb}</p>
            <address className="text-sm not-italic leading-6 text-muted-foreground">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <a
              href={telHref}
              className="flex min-h-11 items-center text-sm font-medium text-primary hover:underline"
            >
              {site.phone.display}
            </a>
          </div>

          <nav aria-label={site.footer.exploreHeading}>
            <h2 className="text-sm font-semibold text-foreground">
              {site.footer.exploreHeading}
            </h2>
            <ul className="mt-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex min-h-10 items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-foreground">
              {site.footer.tenantsHeading}
            </h2>
            <ul className="mt-3 grid grid-cols-1 gap-x-4 min-[420px]:grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
              {businesses.map((b) => (
                <li key={b.slug}>
                  <a
                    href={`#${b.slug}`}
                    className="flex min-h-10 items-center text-sm text-muted-foreground hover:text-foreground"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start gap-4">
            <h2 className="text-sm font-semibold text-foreground">
              {site.footer.visitHeading}
            </h2>
            <ul className="flex w-full max-w-60 flex-col gap-1">
              {site.hours.map((row) => (
                <li
                  key={row.days}
                  className="flex items-baseline justify-between gap-3 text-sm text-muted-foreground"
                >
                  <span>{row.days}</span>
                  <span className="whitespace-nowrap">
                    {row.open} – {row.close}
                  </span>
                </li>
              ))}
            </ul>
            {site.social.length > 0 && (
              <div className="flex gap-2">
                {site.social.map((s) => {
                  const Icon = socialIcons[s.platform];
                  return (
                    <a
                      key={s.platform}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{site.legal.copyright}</p>
          <ul className="flex gap-4">
            {site.legal.links.map((link) => (
              <li key={link.label}>
                {/* TODO: CLIENT DATA — placeholder legal link (href="#"). */}
                <a
                  href={link.href}
                  className="flex min-h-10 items-center hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
