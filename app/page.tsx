import { DirectorySection } from "@/components/sections/directory-section";
import { OwnerPromo } from "@/components/sections/owner-promo";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <main id="main" className="flex flex-1 flex-col">
        <DirectorySection />
        <OwnerPromo />
      </main>
    </div>
  );
}
