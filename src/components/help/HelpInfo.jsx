import React, { useState } from 'react';
import './helpInfo.css';

export const HelpInfo = () => {
  const [visibleOption, setVisibleOption] = useState(null);

  const toggleOption = (option) => {
    if (visibleOption === option) {
      setVisibleOption(null);
    } else {
      setVisibleOption(option);
    }
  };

  return (
    <div className="card-info">
      <div className='title-container'>
        <h2 className='title'>Ayuda / Help</h2>
        <p className='subdesc'>Preguntas Frecuentes del Programa</p>
      </div>
      <div className='dropdown-menu'>
        <div className='menu-option'>
          <div className='label-option' onClick={() => toggleOption('interfaz')}>
            <h2 className='label'>Interfaz del programa</h2>
          </div>
          {visibleOption === 'interfaz' && (
            <div className='option-text'>
              <p className='option-text'>
                Conoce la interfaz de Easy Bank Code, aquí puedes explorar diversas opciones dentro de nuestras páginas, opciones útiles para visualizar tu información personal
                y realizar transferencias
              </p>
            </div>
          )}
        </div>
        <div className='menu-option'>
          <div className='label-option' onClick={() => toggleOption('cuenta')}>
            <h2 className='label'>Cómo manejo mi cuenta</h2>
          </div>
          {visibleOption === 'cuenta' && (
            <div className='option-text'>
              <p className='option-text'>
                Aquí puedes aprender cómo gestionar tu cuenta de manera efectiva. Al momento que un administrador cree 
                tu cuenta podrás acceder a ella al momento de logearte, cuando estés logeado en el programa tendrás la capacidad
                de visualizar elementos de cuenta como lo es tu saldo y número de identifiación, así mismo podrás modificar elementos del registro
                como tu contraseña.
              </p>
            </div>
          )}
        </div>
        <div className='menu-option'>
          <div className='label-option' onClick={() => toggleOption('transacciones')}>
            <h2 className='label'>Cómo realizo transacciones</h2>
          </div>
          {visibleOption === 'transacciones' && (
            <div className='option-text'>
              <p className='option-text'>
                Aprende los pasos necesarios para realizar transacciones de forma segura. Para llevar a cabo tus transacciones lo único que necesitas
                es acceder a la sección de transferencias, aquí tendrás que ingresar información necesaria para el proceso, como lo es el monto a transferir
                y la información del destinatario, además de poder usar tus cuentas añadidas en favoritos para facilitar el proceso.
              </p>
            </div>
          )}
        </div>
        <div className='menu-option'>
          <div className='label-option' onClick={() => toggleOption('contacto')}>
            <h2 className='label'>Información de contacto</h2>
          </div>
          {visibleOption === 'contacto' && (
            <div className='option-text'>
              <div className='contact-item'>
                <p>Teléfono</p>
                <div className='contact-detail'>
                  <p>502 4659 8475</p>
                  <img src='https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid' className='icon' alt='phone icon' />
                </div>
              </div>
              <div className='contact-item'>
                <p>Correo</p>
                <div className='contact-detail'>
                  <p>helpeasybank@gmail.com</p>
                  <img src='https://cdn-icons-png.freepik.com/256/46/46951.png?semt=ais_hybrid' className='icon' alt='email icon' />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};