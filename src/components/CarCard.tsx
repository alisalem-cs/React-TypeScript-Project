
type CarCardProps = {
  name: string;
  price: number;
  image: string;
  year: number;
};

function CarCard(props: CarCardProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: ${props.price}</p>
      <p>Year: {props.year}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default CarCard;
