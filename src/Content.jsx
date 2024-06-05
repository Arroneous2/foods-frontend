import { FoodsIndex } from "./FoodsIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { FoodsNew } from "./FoodsNew";
import { Modal } from "./Modal";
import { FoodShow } from "./FoodShow";

export function Content() {
  const [foods, setFoodsIndex] = useState([]);
  const [isFoodShowVisible, setisFoodShowVisible] = useState(false);
  const [currentFood, setCurrentFood] = useState({});

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

  const handleShowFood = (food) => {
    setisFoodShowVisible(true);
    setCurrentFood(food);
  };

  const handleClose = () => {
    setisFoodShowVisible(false);
  };

  useEffect(handleFoodsIndex, []);
  return (
    <main>
      <FoodsNew onCreateFood={handleCreateFood} />
      <FoodsIndex foods={foods} onShowFood={handleShowFood} />
      <button onClick={handleFoodsIndex}>Get Foods</button>
      <Modal show={isFoodShowVisible} onClose={handleClose}>
        <FoodShow food={currentFood} />
      </Modal>
    </main>
  );
}
