import { Phone, Plus } from "lucide-react";

import { businesses, type Business } from "@/content/businesses";
import { site } from "@/content/site";
import { telHref } from "@/lib/phone";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function DirectorySection() {
  return (
    <section
      id="directory"
      aria-labelledby="directory-heading"
      className="scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h2 id="directory-heading" className="text-3xl sm:text-4xl">
          {site.directory.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {site.directory.intro}
        </p>
        {/* hiddenUntilFound keeps closed panels in the DOM so browser
            find-in-page (and crawlers) can reach the descriptions. */}
        <Accordion
          hiddenUntilFound
          className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {businesses.map((business) => (
            <BusinessCard key={business.slug} business={business} />
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function BusinessCard({ business }: { business: Business }) {
  const { labels } = site.directory;
  return (
    <AccordionItem
      // The footer's tenant list links to #<slug>; scroll-mt clears the
      // sticky h-16 header.
      id={business.slug}
      value={business.slug}
      className="scroll-mt-24 rounded-4xl bg-card text-card-foreground shadow-xs ring-1 ring-foreground/5 transition-shadow hover:shadow-md data-open:shadow-md"
    >
      <AccordionHeader>
        <AccordionTrigger className="px-6 py-5">
          <span className="flex min-w-0 flex-col items-start gap-2">
            <span className="text-base font-medium">{business.name}</span>
            <Badge variant="secondary" className="font-sans">
              {business.category}
            </Badge>
            {business.suite && (
              <span className="font-sans text-sm text-muted-foreground">
                {labels.suite} {business.suite}
              </span>
            )}
          </span>
          <span
            className="flex shrink-0 items-center gap-2 font-sans"
            aria-hidden="true"
          >
            <span className="text-xs text-muted-foreground group-data-panel-open/accordion-trigger:hidden">
              {labels.details}
            </span>
            <span className="hidden text-xs text-muted-foreground group-data-panel-open/accordion-trigger:inline">
              {labels.close}
            </span>
            <span className="flex size-8 items-center justify-center rounded-full border border-border text-foreground">
              <Plus className="size-4 transition-transform group-data-panel-open/accordion-trigger:rotate-45 motion-reduce:transition-none" />
            </span>
          </span>
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionPanel>
        <div className="flex flex-col gap-4 px-6 pb-6">
          <p className="text-sm text-muted-foreground">
            {business.description}
          </p>
          {(business.phone || business.website || business.email) && (
            <div className="flex flex-wrap gap-2">
              {business.phone && (
                <Button
                  className="h-11"
                  nativeButton={false}
                  render={<a href={telHref(business.phone)} />}
                  aria-label={`${labels.call} ${business.name}`}
                >
                  <Phone data-icon="inline-start" aria-hidden="true" />
                  {business.phone}
                </Button>
              )}
              {business.website && (
                <Button
                  variant="outline"
                  className="h-11"
                  nativeButton={false}
                  render={
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  {labels.website}
                </Button>
              )}
              {business.email && (
                <Button
                  variant="outline"
                  className="h-11"
                  nativeButton={false}
                  render={<a href={`mailto:${business.email}`} />}
                >
                  {labels.email}
                </Button>
              )}
            </div>
          )}
          {business.hours && business.hours.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{labels.hours}</span>
              <ul className="flex max-w-60 flex-col gap-1">
                {business.hours.map((row) => (
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
            </div>
          )}
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
}
