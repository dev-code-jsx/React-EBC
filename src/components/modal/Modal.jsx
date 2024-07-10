import './modal.css';
export const Modal = ({children }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};


