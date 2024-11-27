import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [studentCode, setStudentCode] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para el envío del formulario
    console.log("Código de estudiante:", studentCode);
    console.log("Contraseña:", password);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="studentCode">Código Estudiante</label>
            <input
              type="text"
              id="studentCode"
              value={studentCode}
              onChange={(e) => setStudentCode(e.target.value)}
              placeholder="Ingresa tu código"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
            />
          </div>
          <div className="restore-password">
            <a href="/restore-password">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" className="submit-btn">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
