import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} />
      ))}
    </div>
  );
};
export default Tours;
