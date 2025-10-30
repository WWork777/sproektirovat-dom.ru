export type PropertyHomes = {
  name: string;
  slug: string;
  location: string;
  rate: string;
  textFirst?: string;
  textSecond?: string;
  textThreed?: string;
  textFourth?: string;
  beds: number;
  baths: number;
  area: number;
  images: PropertyImage[];
};

interface PropertyImage {
  src: string;
}
