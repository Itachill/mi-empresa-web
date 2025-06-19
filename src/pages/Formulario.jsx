import { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [tipoCliente, setTipoCliente] = useState('Persona');
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});

  const validar = () => {
    const nuevosErrores = {};

    if (!nombre.trim()) {
      nuevosErrores.nombre = 'Este campo es obligatorio';
    }

    const rutRegex = /^\d{7,8}-[\dkK]$/;
    if (!rutRegex.test(rut)) {
      nuevosErrores.rut = 'RUT inválido. Formato 12345678-9';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      nuevosErrores.email = 'Correo electrónico inválido';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      alert('Solicitud enviada con éxito');
      // limpiar formulario
      setTipoCliente('Persona');
      setNombre('');
      setRut('');
      setEmail('');
      setMensaje('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="tipo">Tipo de cliente</label>
        <select
          id="tipo"
          value={tipoCliente}
          onChange={(e) => setTipoCliente(e.target.value)}
        >
          <option value="Persona">Persona</option>
          <option value="Empresa">Empresa</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="nombre">Nombre o Razón Social</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        {errores.nombre && <span className="error">{errores.nombre}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="rut">RUT</label>
        <input
          id="rut"
          type="text"
          value={rut}
          onChange={(e) => setRut(e.target.value)}
          placeholder="12345678-9"
          required
        />
        {errores.rut && <span className="error">{errores.rut}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errores.email && <span className="error">{errores.email}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="mensaje">Solicitud especial</label>
        <textarea
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      <button type="submit">Enviar solicitud</button>
    </form>
  );
}

export default Formulario;
