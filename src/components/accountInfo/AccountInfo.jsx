import "./accountInfo.css"
import useAccountD from "../../shared/hooks/useAccountD"

export const AccountInfo = () => {
  const { myAccountDetails } = useAccountD();

  if (!myAccountDetails || !myAccountDetails.response) {
    return <p>Loading...</p>; 
  }

  const { accountDetails, detailsUser } = myAccountDetails.response;
  if (!accountDetails || !detailsUser) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container-my-account">
      <div className="account-header-my-account">
        <p className="account-number-my-account">GTQ - {accountDetails.accountNumber}</p>
        <h2 className="account-owner-my-account">{detailsUser.names.toUpperCase()} {detailsUser.lastNames.toUpperCase()}</h2>
      </div>
      <div className="account-balances-my-account">
        <div className="balance-section-my-account">
          <p className="balance-label-my-account">TIPO DE CUENTA</p>
          <p className="balance-value-my-account">{accountDetails.type}</p>

          <p className="balance-label-my-account">SALDO DISPONIBLE</p>
          <p className="balance-value-my-account">{accountDetails.balance} GTQ</p>
        </div>
        <div className="balance-section-my-account">
          <p className="balance-label-my-account">SALDO TOTAL</p>
          <p className="balance-value-my-account">{accountDetails.balance} GTQ</p>
        </div>
      </div>
      <div className="account-actions-my-account">
        <button className="payments-button-my-account">Mis Servicios</button>
        <button className="history-button-my-account">Historial</button>
      </div>
    </div>
  );
};

