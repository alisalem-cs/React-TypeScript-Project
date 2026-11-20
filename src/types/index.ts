export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  increase: (id: number) => void;
  decrease: (id: number) => void;
  remove: (id: number) => void;
  clear: () => void;
};

export type WishlistState = {
  items: Product[];
  toggleWishlist: (product: Product) => void;
};