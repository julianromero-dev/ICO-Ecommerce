import '../../App.css';
import './loginpages.css';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase';
import Swal from 'sweetalert2'; // 👈 Importación

function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/inicio');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al iniciar sesión',
          text: error.message
        });
      });
  }

  const provider = new GoogleAuthProvider();

  function loginWithGoogle() {
    signInWithPopup(auth, provider)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión con Google exitoso',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/inicio');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error con Google',
          text: error.message
        });
      });
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
            <input id="email" name="email" type="email" placeholder="juan.jose@gmail.com" required />
          </div>
          <div className="input-container">
            <input
              id="password"
              name="password"
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
            style={{ cursor: 'pointer' }}
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
