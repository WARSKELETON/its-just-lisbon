export type Review = {
  uuid: string;
  name: string;
  content: string;
  avatar: string;
  publishedAt: string;
  tourIds?: string[];
  tour?: string;
};
