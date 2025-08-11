import './createaccount.css';
import { useNavigate } from 'react-router-dom';
function CreateAccount() {
  const navigate = useNavigate();
  return (
    <div className="overlay">
      <div className="container">
        <div className="close" onClick={() => navigate('/') }>&times;</div>
        <div className="logo">
          <img className="logo-img" src="../src/assets/ICO-removebg-preview.png" alt="ICO Logo" onError={e => {e.target.onerror=null; e.target.src='../src/assets/ICO-removebg-preview.png';}} />
        </div>
        <h2>CREAR CUENTA</h2>
        <form autoComplete="off">
          <div className="form-group">
            <input type="text" placeholder="JUAN JOSE" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="VARGAS PIÑON" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirmar contraseña" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Teléfono" required />
          </div>
          <div className="form-actions">
            <button type="submit">CREAR CUENTA</button>
            <button type="button" onClick={() => navigate('/')}>CANCELAR</button>
          </div>
        </form>
        <div className="google-login">
          <span>INICIAR SESION CON</span>
          <img src="../src/assets/icons8-google.svg" alt="Google login" style={{width:'32px'}} />
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

export default CreateAccount;
