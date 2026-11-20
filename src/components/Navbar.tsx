import { Link, NavLink } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const wishlistItems = useWishlistStore((state) => state.items);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        APEX <span>MOTORS</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Cars</NavLink>
        <NavLink to="/wishlist">
          Wishlist ({wishlistCount})
        </NavLink>
        <NavLink to="/cart">
          Cart ({cartCount})
        </NavLink>
      </nav>
    </header>
  );
}