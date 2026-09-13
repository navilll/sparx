import locationCatalog from "../data/locations.json";

export type Location = {
  slug: string;
  name: string;
  state: string;
  shortDescription: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  services: string[];
};

export const locations = locationCatalog as Location[];

export const getLocation = (slug: string) => locations.find((location) => location.slug === slug) ?? locations[0];
