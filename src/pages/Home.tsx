import { Link } from "react-router-dom";
import { products } from "../data/products";
import CarCard from "../components/CarCard";

const categories = [
  "Sports",
  "Supercar",
  "Luxury",
  "SUV",
  "Electric",
];

export default function Home() {
  const featuredCars = products.slice(0, 4);

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">PREMIUM AUTOMOTIVE</p>

          <h1>
            DRIVE THE
            <br />
            <span>EXTRAORDINARY.</span>
          </h1>

          <p>
            Discover a collection of exceptional cars,
            designed for those who appreciate performance,
            luxury and individuality.
          </p>

          <Link to="/products" className="primary-button">
            Explore Collection
          </Link>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-section">
        <div className="section-heading">
          <p>CURATED FOR YOU</p>
          <h2>Featured Collection</h2>
        </div>

        <div className="car-grid">
          {featuredCars.map((product) => (
            <CarCard key={product.id} product={product} />
          ))}
        </div>

        <div className="view-all">
          <Link to="/products">View All Cars →</Link>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section">
        <div className="section-heading">
          <p>FIND YOUR DRIVE</p>
          <h2>Explore Categories</h2>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="category-card"
            >
              <h3>{category}</h3>
              <span>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BRAND SECTION */}
      <section className="brand-section">
        <p>APEX MOTORS</p>
        <h2>Where Passion Meets Performance.</h2>
        <Link to="/products">Discover Your Next Drive →</Link>
      </section>
    </main>
  );
}