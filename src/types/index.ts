export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price_cents: number;
  image_url: string;
  currency: string;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}
