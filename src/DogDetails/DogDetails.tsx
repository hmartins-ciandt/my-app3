import React, { useState } from "react";
import "../App.css";

interface dogDetailProps {
  dogName?: string;
  dogImage?: string;
  onBark: () => void;
  getScold: (count: number) => void;
  Scold: number;
}

function DogDetails({
  dogName,
  dogImage,
  onBark,
  getScold,
  Scold,
}: dogDetailProps) {
  const [counter, setCount] = useState(0);
  return (
    <div>
      <img className="dogImage" src={dogImage} alt="" />
      <h5>{dogName}</h5>
      <button onClick={() => onBark()}>Bark</button>
      <button
        onClick={() => {
          setCount(counter + 1);
          getScold(Scold + 1);
        }}
      >
        Scold
      </button>
      <h5>
        You scolded {dogName} {counter} times{" "}
      </h5>
    </div>
  );
}

export default DogDetails;
