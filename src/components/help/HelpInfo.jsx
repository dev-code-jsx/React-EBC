import React, { useState } from 'react';
import './helpInfo.css';

export const HelpInfo = () => {
  const [visibleOption, setVisibleOption] = useState(null);

  const toggleOption = (option) => {
    setVisibleOption(visibleOption === option ? null : option);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Ayuda / Help</h2>
        <p className="card-description">Preguntas Frecuentes del Programa</p>
      </div>
      <div className="card-content">
        <div className="dropdown-menu">
          <div className="menu-option" onClick={() => toggleOption('interfaz')}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className="icon" alt="User Icon" />
            <h2 className="label">Interfaz del programa</h2>
            {visibleOption === 'interfaz' && (
              <div className="option-text">
                <p>
                  Conoce la interfaz de Easy Bank Code, aquí puedes explorar diversas opciones dentro de nuestras páginas, opciones útiles para visualizar tu información personal
                  y realizar transferencias.
                </p>
              </div>
            )}
          </div>
          <div className="menu-option" onClick={() => toggleOption('cuenta')}>
            <img src="https://static-00.iconduck.com/assets.00/wrench-icon-512x512-86z6p6en.png" className="icon" alt="Wrench Icon" />
            <h2 className="label">Cómo manejo mi cuenta</h2>
            {visibleOption === 'cuenta' && (
              <div className="option-text">
                <p>
                  Aquí puedes aprender cómo gestionar tu cuenta de manera efectiva. Al momento que un administrador cree 
                  tu cuenta podrás acceder a ella al momento de logearte, cuando estés logeado en el programa tendrás la capacidad
                  de visualizar elementos de cuenta como lo es tu saldo y número de identifiación, así mismo podrás modificar elementos del registro
                  como tu contraseña.
                </p>
              </div>
            )}
          </div>
          <div className="menu-option" onClick={() => toggleOption('transacciones')}>
            <img src="https://static-00.iconduck.com/assets.00/money-icon-2048x2048-q99hqr89.png" className="icon" alt="Dollar Icon" />
            <h2 className="label">Cómo realizo transacciones</h2>
            {visibleOption === 'transacciones' && (
              <div className="option-text">
                <p>
                  Aprende los pasos necesarios para realizar transacciones de forma segura. Para llevar a cabo tus transacciones lo único que necesitas
                  es acceder a la sección de transferencias, aquí tendrás que ingresar información necesaria para el proceso, como lo es el monto a transferir
                  y la información del destinatario, además de poder usar tus cuentas añadidas en favoritos para facilitar el proceso.
                </p>
              </div>
            )}
          </div>
          <div className="menu-option" onClick={() => toggleOption('contacto')}>
            <img src="https://static.thenounproject.com/png/79102-200.png" className="icon" alt="Contact Icon" />
            <h2 className="label">Información de contacto</h2>
            {visibleOption === 'contacto' && (
              <div className="option-text">
                <div className="contact-item">
                  <p>Teléfono:</p>
                  <div className="contact-detail">
                    <p>502 4659 8475</p>
                    <img src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid" className="icon2" alt="phone icon" />
                  </div>
                </div>
                <div className="contact-item">
                  <p>Correo:</p>
                  <div className="contact-detail">
                    <p>helpeasybank@gmail.com</p>
                    <img src="https://cdn-icons-png.freepik.com/256/46/46951.png?semt=ais_hybrid" className="icon2" alt="email icon" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};