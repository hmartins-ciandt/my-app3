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
  if (dogImage === "N") {
    dogImage =
      "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb.jpg";
  }

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
