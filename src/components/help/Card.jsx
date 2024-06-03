import './helpInfo.css';
export const Card = ({ imageSrc, title, descripcion }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="card picture" className="card-image"></img>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};
