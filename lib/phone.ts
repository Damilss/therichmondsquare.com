// lib/phone.ts
//
// Tenant phone numbers are stored verbatim from the owner's sheet
// (content/businesses.ts); normalize them into tel: URIs at render time only,
// so the displayed string always matches the sheet.

export function telHref(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  return `tel:+${digits.length === 10 ? `1${digits}` : digits}`;
}
