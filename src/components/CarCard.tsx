import type { Product } from "../types";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";

type Props = {
  product: Product;
};

export default function CarCard({ product }: Props) {
  const addToCart = useCartStore((state) => state.addToCart);
  const toggleWishlist = useWishlistStore(
    (state) => state.toggleWishlist
  );
  const wishlistItems = useWishlistStore((state) => state.items);

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );

  return (
    <article className="car-card">
      <img
        src={product.image}
        alt={product.name}
        className="car-card-image"
      />

      <div className="car-card-content">
        <p className="car-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="car-price">
          ${product.price.toLocaleString("en-US")}
        </p>

        <div className="car-card-actions">
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>

          <button
            className="wishlist-button"
            onClick={() => toggleWishlist(product)}
            aria-label="Toggle wishlist"
          >
            {isWishlisted ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}