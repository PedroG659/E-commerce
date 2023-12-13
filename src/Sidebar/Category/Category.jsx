import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>Todos
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Tênis"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandálias"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Salto"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;