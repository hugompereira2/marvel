export interface Character {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  comicSimplified?: Comic[]
  urls: {
    type: string;
    url: string;
  }[];
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: DateObject[];
  prices: Price[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorSummary;
  characters: CharacterSummary;
  stories: StorySummary;
  events: EventSummary;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Image {
  path: string;
  extension: string;
}

interface CreatorSummary {
  available: number;
  collectionURI: string;
  items: CreatorSummaryItem[];
  returned: number;
}

interface CreatorSummaryItem {
  resourceURI: string;
  name: string;
  role: string;
}

interface CharacterSummary {
  available: number;
  collectionURI: string;
  items: CharacterSummaryItem[];
  returned: number;
}

interface CharacterSummaryItem {
  resourceURI: string;
  name: string;
}

interface StorySummary {
  available: number;
  collectionURI: string;
  items: StorySummaryItem[];
  returned: number;
}

interface StorySummaryItem {
  resourceURI: string;
  name: string;
  type: string;
}

interface EventSummary {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

interface DateObject {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
}
