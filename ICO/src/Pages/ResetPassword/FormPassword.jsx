import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updatePassword } from 'firebase/auth';
import { auth } from '../../firebase';
import Swal from 'sweetalert2';

function FormPassword({ oobCode }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (form.password !== form.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
      });
      return;
    }

    try {
      const user = auth.currentUser;
      await updatePassword(user, form.password);
      
      Swal.fire({
        icon: 'success',
        title: 'Contraseña actualizada',
        text: 'Tu contraseña ha sido actualizada exitosamente.',
        confirmButtonText: 'Aceptar',
      });

      navigate('/login'); // Redirigir al login después de actualizar la contraseña
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
    <form autoComplete="off" onSubmit={handleSubmit} className="form-reset">
      <div className="form-group">
        <input
          type="password"
          name="password"
          placeholder="Nueva contraseña"
          value={form.password}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirmar nueva contraseña"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="input-field"
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-btn">ACTUALIZAR CONTRASEÑA</button>
        <button type="button" onClick={() => navigate('/')} className="cancel-btn">CANCELAR</button>
      </div>
    </form>
  );
}

export default FormPassword;
