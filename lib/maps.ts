// lib/maps.ts
//
// URL builders for map links and the embedded map. Pure functions over an
// address string so the address itself lives only in content/site.ts.

export function googleMapsDirectionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

export function appleMapsDirectionsUrl(destination: string): string {
  return `https://maps.apple.com/?daddr=${encodeURIComponent(destination)}`;
}

// Keyless Google Maps embed — no API key required for a simple place query.
export function googleMapsEmbedUrl(query: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}
