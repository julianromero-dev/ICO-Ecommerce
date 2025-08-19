import { useState } from 'react';
import './LocalidadForm.css'; // Asegúrate de que este archivo exista

function LocalidadForm({ onSubmit }) {
  const [localidad, setLocalidad] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localidad.trim()) {
      alert('Por favor ingresa tu localidad.');
      return;
    }
    // Puedes agregar validaciones extras aquí

    // Enviar datos al componente padre o donde quieras manejar
    onSubmit({ localidad, descripcion });

    // Opcional: limpiar formulario
    setLocalidad('');
    setDescripcion('');
  };

  return (
    <div className="overlay">
      <div className="container">
        <h2>Información de Entrega</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="localidad">Localidad donde vives *</label>
            <input
              type="text"
              id="localidad"
              name="localidad"
              placeholder="Ejemplo: Ciudad, barrio, zona"
              value={localidad}
              onChange={(e) => setLocalidad(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción o sugerencia de tu casa</label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="Detalles para facilitar la entrega (ej. cerca del parque, color de la casa, etc.)"
              rows="4"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <button type="submit">Enviar Información</button>
          <button type="button" onClick={() => navigate('/')}>Mas tarde</button>

        </form>
      </div>
    </div>
  );
}

export default LocalidadForm;
