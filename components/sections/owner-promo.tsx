import { site } from "@/content/site";
import { Button } from "@/components/ui/button";

export function OwnerPromo() {
  const { ownerPromo } = site;
  const ctaHref = ownerPromo.cta.href ?? `tel:${site.phone.e164}`;
  return (
    <section aria-labelledby="owner-promo-heading">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="rounded-4xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
            {/* TODO: CLIENT ASSET — render the firm logo here from
                site.ownerPromo.logo once it exists (inverted variant lives
                in /brand). */}
            <p className="text-xs font-medium tracking-widest text-primary-foreground/60 uppercase">
              {ownerPromo.eyebrow}
            </p>
            <h2 id="owner-promo-heading" className="text-2xl sm:text-3xl">
              {ownerPromo.heading}
            </h2>
            <p className="text-primary-foreground/80">{ownerPromo.blurb}</p>
            <Button
              className="mt-2 h-11 bg-primary-foreground text-primary hover:bg-primary-foreground/85"
              nativeButton={false}
              render={<a href={ctaHref} />}
            >
              {ownerPromo.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
