export function FoodShow(props) {
  console.log(props);
  return (
    <div>
      <h1>food information</h1>
      <p>Name: {props.food.name}</p>
      <p>Url: {props.food.ethnicity}</p>
      <p>Width: {props.food.time}</p>
      <img src={props.food.image_url} alt="" />
    </div>
  );
}
