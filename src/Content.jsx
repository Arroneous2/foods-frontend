import { FoodsIndex } from "./FoodsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { FoodsNew } from "./FoodsNew";

export function Content() {
  const [foods, setFoodsIndex] = useState([]);

  const handleFoodsIndex = () => {
    axios.get("http://localhost:3000/foods.json").then((response) => {
      console.log(response.data);
      setFoodsIndex(response.data);
    });
  };

  const handleCreateFood = (params, successCallback) => {
    axios.post("http://localhost:3000/foods.json", params).then((response) => {
      console.log("creating new foods with", params);
      setFoodsIndex([...foods, response.data]);
    });
  };

  useEffect(handleFoodsIndex, []);
  return (
    <main>
      <FoodsNew onCreateFood={handleCreateFood} />
      <FoodsIndex foods={foods} />
      <button onClick={handleFoodsIndex}>Get Foods</button>
    </main>
  );
}
