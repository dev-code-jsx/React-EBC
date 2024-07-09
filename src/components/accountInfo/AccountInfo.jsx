import "./accountInfo.css"
export const AccountInfo = () => {
  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Account Info</h2>
        <img className="user-icon" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
        <p className="subdescription">Aquí está la información básica de tu cuenta</p>
      </div>
      <div className="info-container">
        <div className="info">
          <div className="info-section">
            <p>Account number: </p>
            <div></div>
          </div>
          <div className="info-section">
            <p>Balance: </p>
            <div></div>
          </div>
          <div className="info-section">
            <p>Type: </p>
            <div></div>
          </div>
          <div className="info-section">
            <p>Created at: </p>
            <div></div>
          </div>
          <button className="button-changePass">Change Password</button>
        </div>
      </div>
    </div>
  )
}
