import './helpInfo.css';
export const CardInfo = ({title, descripcion}) => {
  return (
    <div className="card-info">
        <h2>{title}</h2>
        <p>{descripcion}</p>
    </div>
  )
}

