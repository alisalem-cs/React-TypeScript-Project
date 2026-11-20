import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>APEX MOTORS</h2>
        <p>Driven by passion. Built for performance.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/products">Explore Cars</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
      </div>

      <p className="copyright">
        © 2026 Apex Motors. All rights reserved.
      </p>
    </footer>
  );
}