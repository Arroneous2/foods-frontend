export function FoodsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateFood(params, () => EventTarget.reset());
  };
  return (
    <div>
      <h1>New Food</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Ethnicity: <input name="ethnicity" type="text" />
        </div>
        <div>
          Time: <input name="time" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create New Food</button>
      </form>
    </div>
  );
}
