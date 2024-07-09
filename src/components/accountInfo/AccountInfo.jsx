import "./accountInfo.css"
import useAccountD from "../../shared/hooks/useAccountD"
import { useEffect } from "react";

export const AccountInfo = () => {
  const { myAccountDetails} = useAccountD();

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
            <label>Account number: {myAccountDetails.accountNumber}</label>
            <div></div>
          </div>
          <div className="info-section">
            <p>Balance: {myAccountDetails.balance}</p>
            <div></div>
          </div>
          <div className="info-section">
            <p>Type: {myAccountDetails.type}</p>
            <div></div>
          </div>
          <div className="info-section">
            <div></div>
          </div>
          <button className="button-changePass">Change Password</button>
        </div>
      </div>
    </div>
  )
}
