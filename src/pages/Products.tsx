
import { cars } from '../data/cars';
import CarCard from '../components/CarCard';

function Products() {
  return (
    <div>
      <h1>Our Cars</h1>

      {cars.map((car) => (
        <CarCard
          key={car.id}
          name={car.name}
          price={car.price}
          image={car.image}
          year={car.year}
        />
      ))}
    </div>
  );
}

export default Products;
