const { i18n } = require("./next-i18next.config");
let domains = ["directus:8055"];

if (process.env.NEXT_PUBLIC_DIRECTUS_URL) {
  domains.push(new URL(process.env.NEXT_PUBLIC_DIRECTUS_URL).hostname);
}

module.exports = {
  images: { domains },
  i18n: i18n,
};
