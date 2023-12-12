import './Category.css'

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Categoria</h2>

      <div>
        <label className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Todos
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Tênis
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Sandálias
        </label>
        <label className="sidebar-label-container">
          <input type="radio" name='test' />
          <span className="checkmark"></span>Salto
        </label>
      </div>
    </div>
  )
}

export default Category