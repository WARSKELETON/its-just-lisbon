export type Tour = {
  id: number;
  name: string;
  bookName: string;
  location: 'lisbon' | 'sintra';
  photoMobile: string;
  photoDesktop: string;
  toBook: boolean;
  description: string;
  landmarks: string[];
  included: string[];
  price: string;
  images: Array<{
    original: string;
    thumbnail: string;
  }>;
  timeline: Array<{
    time: string;
    title: string;
    description: string;
  }>;
};
