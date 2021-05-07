import React, { useState } from "react";
import "../App.css";

interface dogDetailProps {
  dogName?: string;
  dogImage: string;
  onBark: () => void;
}

function DogDetails({ dogName, dogImage, onBark }: dogDetailProps) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <img className="dogImage" src={dogImage} alt="" />
      <h5>{dogName}</h5>
      <button onClick={() => onBark()}>Bark</button>
      <button onClick={() => setCount(count + 1)}>Scold</button>
      <h5>
        You scolded {dogName} {count} times{" "}
      </h5>
    </div>
  );
}

export default DogDetails;
