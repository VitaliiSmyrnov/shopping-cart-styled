export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  image: string;
  quantity: number;
};

export interface CartProps {
  [productId: string]: Product;
}
