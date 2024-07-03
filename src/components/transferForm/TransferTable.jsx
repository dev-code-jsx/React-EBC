
import "./transferTable.css"
export const TransferTable = () => {
    return (
        <div className="general-container">
            <div className="header">
                <h2 className="header-text">Tabla de Usuarios</h2>
            </div>
            <div className="table-container">
                <table className="table">
                    <thead className="table-header">
                        <tr>
                            <th>Code User</th>
                            <th>Username</th>
                            <th>DPI</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        <tr>
                            <th>02</th>
                            <td>Juan</td>
                            <td>1234567891012</td>
                            <td>
                                <button className="transfer-btn">Transferir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
