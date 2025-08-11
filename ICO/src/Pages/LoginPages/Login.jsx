import '../../App.css';
import './loginpages.css';

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // Aquí va la lógica de Firebase para login
  }

  function loginWithGoogle() {
    // Aquí va la lógica de Firebase para login con Google
  }

  return (
    <div className="overlay">
      <div className="container">
        <div className="close" onClick={() => navigate('/create-account')}>&times;</div>
        <div className="logo">
          <img
            className="logo-img"
            src="../src/assets/ICO-removebg-preview.png"
            alt="ICO Logo"
            onError={e => {
              e.target.onerror = null;
              e.target.src = '../src/assets/ICO-removebg-preview.png';
            }}
          />
        </div>
        <h2>INICIAR SESION</h2>
        <form autoComplete="off" onSubmit={handleLogin}>
          <div className="input-container">
            <input id="email" type="email" placeholder="juan.jose@gmail.com" required />
          </div>
          <div className="input-container">
            <input
              id="password"
              type="password"
              placeholder="******************"
              required
            />
          </div>
          <div className="forgot-password" onClick={() => navigate('/reset-password')}>
            OLVIDE MI CONTRASEÑA
          </div>
          <div className="form-actions">
            <button type="submit">INICIAR SESION</button>
            <button type="button" onClick={() => navigate('/create-account')}>
              CREAR CUENTA
            </button>
          </div>
        </form>
        <div className="google-login">
          <span>INICIAR SESION CON</span>
          <img
            src="../src/assets/icons8-google.svg"
            alt="Google login"
            onClick={loginWithGoogle}
          />
        </div>
      </div>
      <div className="redes">
        <span>NUESTRAS REDES</span>
        <div className="redes-icons">
          <a href="#" title="Facebook">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
          </a>
          <a href="#" title="X">
            <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="X" />
          </a>
          <a href="#" title="Instagram">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
