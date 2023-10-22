// Source:
// Countries with long/lat => https://developers.google.com/public-data/docs/canonical/countries_csv
// Countries images => https://github.com/djaiss/mapsicon

const countryCodesWithImage = ["id", "wy", "ri", "de", "nv"];

export interface Country {
  code: string;
  latitude: number;
  longitude: number;
  name: string;
}

export const countries: Country[] = [
  {
    code: "ID",
    latitude: 44.315817624324424,
    longitude: -114.6352901155054,
    name: "Idaho",
  },
  {
    code: "WY",
    latitude: 42.96755129213882,
    longitude: -107.55120862361497,
    name: "Wyoming",
  },
  {
    code: "NV",
    latitude: 39.299094822557,
    longitude: -116.6436616407996,
    name: "Nevada",
  },
  {
    code: "RI",
    latitude: 41.66163551535037,
    longitude: -71.53176289336065,
    name: "Rhode Island",
  },
  {
    code: "DE",
    latitude: 38.99742764330282,
    longitude: -75.50041703574603,
    name: "Delaware",
  },
];

export const countriesWithImage = countries.filter((c) =>
  countryCodesWithImage.includes(c.code.toLowerCase())
);

// Source: https://fr.wikipedia.org/wiki/ISO_3166
const frenchCountryNames: Record<string, string> = {
  ID: "Idaho",
  RI: "Rhode Island",
  WY: "Wyoming",
  DE: "Delaware",
  NV: "Nevada",
};

export function getCountryName(language: string, country: Country) {
  if (language === "fr") {
    return frenchCountryNames[country.code];
  }
  return country.name;
}

export function sanitizeCountryName(countryName: string): string {
  return countryName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[- '()]/g, "")
    .toLowerCase();
}
