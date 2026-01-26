export type Tour = {
  id: number;
  name: string;
  bookName: string;
  location: 'lisbon' | 'sintra';
  toBook: boolean;
  description: string;
  landmarks: string[];
  included: string[];
  price: string;
  images: string[];
};
