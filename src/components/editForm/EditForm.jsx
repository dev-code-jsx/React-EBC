import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUser } from '../../services';
import { useEditUser } from '../../shared/hooks';
import './editForm.css';

export const EditForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editUser, loading, error } = useEditUser();
  const [userData, setUserData] = useState({
    names: '',
    lastNames: '',
    address: '',
    phone: '',
    email: '',
    job: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser(id);
        console.log('API response:', response);
        if (response && response.user) {
          console.log('Fetched user data:', response.user);
          setUserData({
            names: response.user.names,
            lastNames: response.user.lastNames,
            address: response.user.address,
            phone: response.user.phone.toString(), // Convertir a string al setear
            email: response.user.email,
            job: response.user.job
          });
        } else {
          console.error('User data is undefined or API response is not as expected');
        }
      } catch (e) {
        console.error('Error fetching user data:', e);
      }
    };

    fetchUserData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convertir el campo phone a número si corresponde
    const newValue = name === 'phone' && value !== '' ? parseInt(value, 10) : value;
    setUserData({ ...userData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting user data:', userData);
    await editUser(id, userData);
  };

  return (
    <div className="edit-form-container">
      <h2 className="edit-form-title">Edit User</h2>
      {error && <p className="edit-form-error">{error}</p>}
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Names</label>
          <input
            className="form-input"
            type="text"
            name="names"
            value={userData.names}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Last Names</label>
          <input
            className="form-input"
            type="text"
            name="lastNames"
            value={userData.lastNames}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Address</label>
          <input
            className="form-input"
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone</label>
          <input
            className="form-input"
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Job</label>
          <input
            className="form-input"
            type="text"
            name="job"
            value={userData.job}
            onChange={handleChange}
            required
          />
        </div>
        <button className="form-button" type="submit" disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </button>
      </form>
      <button className="cancel-button" onClick={() => navigate('/dashboardAdmin')}>Cancel</button>
    </div>
  );
};
