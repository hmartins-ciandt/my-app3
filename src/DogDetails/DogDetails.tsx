import "../App.css";

interface DogDetailProps {
  dogName?: string;
  dogImage?: string;
  onBark: () => void;
  getCount: (count: number) => void;
  count: number;
}

function DogDetails({
  dogName,
  dogImage,
  onBark,
  getCount,
  count,
}: DogDetailProps) {
  return (
    <div>
      <img className="dogImage" src={dogImage} alt="" />
      <h5>{dogName}</h5>
      <button onClick={() => onBark()}>Bark</button>
      <button
        onClick={() => {
          getCount(count + 1);
        }}
      >
        Scold
      </button>
      <h5>
        You scolded {dogName} {count} times
      </h5>
    </div>
  );
}

export default DogDetails;
