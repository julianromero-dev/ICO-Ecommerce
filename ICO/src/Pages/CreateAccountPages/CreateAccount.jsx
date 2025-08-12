import './createaccount.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, googleProvider } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'; // 👈 Importación de SweetAlert2

function CreateAccount() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden'
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await addDoc(collection(db, 'usuarios'), {
        uid: userCredential.user.uid,
        nombre: form.nombre,
        apellido: form.apellido,
        telefono: form.telefono,
        email: form.email
      });

      await Swal.fire({
        icon: 'success',
        title: 'Cuenta creada correctamente',
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/login');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error al crear la cuenta',
        text: error.message
      });
    }
  };

  // Función para iniciar sesión con Google
  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      // Agregar usuario a Firestore (si es necesario)
      await addDoc(collection(db, 'usuarios'), {
        uid: userCredential.user.uid,
        nombre: userCredential.user.displayName, // Nombre de usuario de Google
        email: userCredential.user.email
      });

      await Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión con Google exitoso',
        showConfirmButton: false,
        timer: 1500
      });

      navigate('/inicio'); // Redirige a la página de inicio
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error con Google',
        text: error.message
      });
    }
  };

  return (
    <div className="overlay">
      <div className="container">
        <div className="close" onClick={() => navigate('/') }>&times;</div>
        <div className="logo">
          <img className="logo-img" src="./src/assets/ICO-removebg-preview.png" alt="ICO Logo" />
        </div>
        <h2>CREAR CUENTA</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <input name="nombre" type="text" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input name="apellido" type="text" placeholder="Apellido" value={form.apellido} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input name="telefono" type="text" placeholder="Teléfono" value={form.telefono} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder="Correo electrónico" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input name="password" type="password" placeholder="Contraseña" value={form.password} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <input name="confirmPassword" type="password" placeholder="Confirmar contraseña" value={form.confirmPassword} onChange={handleChange} required />
          </div>
          <div className="form-actions">
            <button type="submit">CREAR CUENTA</button>
            <button type="button" onClick={() => navigate('/')}>CANCELAR</button>
          </div>
        </form>
        <div className="google-login">
          <span>INICIAR SESION CON</span>
          <img 
            src="./src/assets/icons8-google.svg" 
            alt="Google login" 
            onClick={loginWithGoogle} 
            style={{width:'32px', cursor: 'pointer'}}
          />
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
