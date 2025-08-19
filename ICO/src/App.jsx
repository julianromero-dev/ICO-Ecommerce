function App() {
  return (
    <div className="overlay">
      <div className="container">
        <div className="logo">
          <img className="logo-img" src="../src/assets/ICO-removebg-preview.png" alt="ICO Logo" />
        </div>
        <h2>Bienvenido a ICO</h2>
        <div className="form-actions">
          <a href="/login">
            <button type="button">Iniciar Sesión</button>
          </a>
          <a href="/create-account">
            <button type="button">Crear Cuenta</button>
          </a>
          <a href="/inicio">
            <button type="button">Iniciar sin una cuenta</button>
          </a>
        </div>
      </div>
      <div className="redes">
        <span>NUESTRAS REDES</span>
        <div className="redes-icons">
          <a href="#" title="Facebook"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
          <a href="#" title="X"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" /></a>
          <a href="#" title="Instagram"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
