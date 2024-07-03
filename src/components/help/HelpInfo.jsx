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
                Aquí puedes aprender cómo gestionar tu cuenta de manera efectiva.
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
                Aprende los pasos necesarios para realizar transacciones de forma segura.
              </p> 
            </div>
          )}
        </div>
      </div>
      <div className='contact-info'>
        <div className='contact-item'>
          <p>Teléfono</p>
          <div className='contact-detail'>
            <p>502 4659 8475</p>
            <img src='https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid' className='icon' alt='phone icon'></img>
          </div>
        </div>
        <div className='contact-item'>
          <p>Correo</p>
          <div className='contact-detail'>
            <p>helpeasybank@gmail.com</p>
            <img src='https://cdn-icons-png.freepik.com/256/46/46951.png?semt=ais_hybrid' className='icon' alt='email icon'></img>
          </div>
        </div>
      </div>
    </div>
  );
};
