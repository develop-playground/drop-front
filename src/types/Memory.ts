export interface Memory {
  id: number;
  image_urls: imageUrlListType;
  content: string;
  location: {
    latitude: number;
    longitude: number;
  };
  address: string;
  created_date: string;
}

export type imageUrlListType = string[];
