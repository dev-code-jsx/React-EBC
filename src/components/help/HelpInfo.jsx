
import './helpInfo.css';
export const HelpInfo = () => {
  return (
    <div className="card-info">
      <h2 className='title'>Ayuda / Help</h2>
      <p className='description'>Bienvenido a la sección de ayuda del programa, aquí se encuentran los elementos de contacto para solicitar apoyo
        en el uso de los elementos de nuestro aplicativo EasyBank, gracias por confiar en nuestros servicios y calidad al momento
        de seleccionar nuestro porgrama para el manejo de sus acciones bancarias. A continuación encontrará nuestros contactos.
      </p>
      <div className='contact-info'>
        <div className='contact-item'>
          <p>Teléfono</p>
          <div className='contact-detail'>
            <p>502 4659 8475</p>
            <img src='https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid' className='icon'></img>
          </div>
        </div>
        <div className='contact-item'>
          <p>Correo</p>
          <div className='contact-detail'>
            <p>helpeasybank@gmail.com</p>
            <img src='https://cdn-icons-png.freepik.com/256/46/46951.png?semt=ais_hybrid' className='icon'></img>
          </div>
        </div>
      </div>
    </div>
  );
};
