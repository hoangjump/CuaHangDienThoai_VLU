import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const AdminLogout = () => {
  const history = useHistory();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.post('/api/admin/logout');
        history.push('/admin-login');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    logout();
  }, [history]);

  return (
    <div className="logout">
      <h2>Logging out...</h2>
    </div>
  );
};

export default AdminLogout;
