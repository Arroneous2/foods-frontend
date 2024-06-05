export function FoodsIndex(props) {
  console.log(props);
  return (
    <div>
      <h1> All the food</h1>
      <div>
        {props.foods.map((food) => (
          <div key={food.id}>
            <h2>{food.name}</h2>
            <p>{food.ethnicity}</p>
            <p>{food.time} minutes</p>
            <img src={food.image_url} alt="" />
            <button onClick={() => props.onShowFood(food)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}
