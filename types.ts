
export type Theme = 'light' | 'dark';

export interface Service {
  id: string;
  title: string;
  description: string;
  path: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
