import { useNavigate } from 'react-router-dom';
import './resetpassword.css';

function ResetPassword() {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // Aquí va la lógica de Firebase para resetear contraseña
    alert('Si el correo existe, se enviarán instrucciones para restablecer la contraseña.');
  };

  return (
    <div className="overlay">
      <div className="container">
        <div className="close" onClick={() => navigate('/') }>&times;</div>
        <div className="logo">
          <img className="logo-img" src="../src/assets/ICO-removebg-preview.png" alt="ICO Logo" />
        </div>
        <h2>RESTABLECER CONTRASEÑA</h2>
        <form autoComplete="off" onSubmit={handleReset}>
          <div className="form-group">
            <input type="email" name="email" placeholder="Correo electrónico" required autoFocus />
          </div>
          <div className="form-actions">
            <button type="submit">ENVIAR INSTRUCCIONES</button>
            <button type="button" onClick={() => navigate('/')}>CANCELAR</button>
          </div>
        </form>
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

export default ResetPassword;
