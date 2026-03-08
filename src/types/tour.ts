export type TourFaq = {
  question: string;
  answer: string;
};

export type Tour = {
  uuid: string;
  name: string;
  slug: string;
  bookName: string;
  location: 'lisbon' | 'sintra';
  toBook: boolean;
  description: string;
  landmarks: string[];
  included: string[];
  price: string;
  images: string[];
  faqs: TourFaq[];
};
