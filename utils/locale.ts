export function decorateLinkWithLocale(path: string, locale: string) {
  if (locale.length > 0) {
    if (locale === "en") {
      locale = "";
    } else {
      locale = `/${locale}`;
    }
  }

  return `${locale}${path}`;
}