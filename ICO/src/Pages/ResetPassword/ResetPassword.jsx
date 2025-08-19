import { useNavigate } from 'react-router-dom';
import './resetpassword.css';  // Importa los estilos de este componente
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import Swal from 'sweetalert2';

function ResetPassword() {
  const navigate = useNavigate();

  // Función para manejar el envío del correo de restablecimiento
  const handleReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, email);
      Swal.fire({
        icon: 'success',
        title: 'Correo enviado',
        text: 'Revisa tu bandeja de entrada para restablecer tu contraseña.',
        confirmButtonText: 'Aceptar',
      });
      navigate('/login'); // Redirige a la página de login
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
        confirmButtonText: 'Cerrar',
      });
    }
  };

  return (
    <div className="overlay">
      <div className="container">
        <div className="close" onClick={() => navigate('/') }>&times;</div>
        <div className="logo">
          <img className="logo-img" src="../src/assets/ICO-removebg-preview.png" alt="ICO Logo" />
        </div>
        <h2>RESTABLECER CONTRASEÑA</h2>
        
        {/* Aquí es donde se coloca el formulario */}
        <FormPassword handleReset={handleReset} />

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

// Formulario para el restablecimiento de contraseña
function FormPassword({ handleReset }) {
  return (
    <form autoComplete="off" onSubmit={handleReset}>
      <div className="form-group">
        <input 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" 
          required 
          autoFocus
        />
      </div>
      <div className="form-actions">
        <button type="submit">ENVIAR INSTRUCCIONES</button>
        <button type="button" onClick={() => navigate('/')}>CANCELAR</button>
      </div>
    </form>
  );
}

export default ResetPassword;
